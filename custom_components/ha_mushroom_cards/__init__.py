"""HA Mushroom Cards - Custom Lovelace cards for Home Assistant."""

import hashlib
import logging
from pathlib import Path

from aiohttp import web

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.components.http import HomeAssistantView
from homeassistant.components.frontend import add_extra_js_url

from .const import DOMAIN
from .scheduler import HacScheduler
from .websocket_api import async_register_websocket_api

_LOGGER = logging.getLogger(__name__)


class HacJsView(HomeAssistantView):
    """Serve ha-mushroom-cards.js with immutable caching (URL has content hash)."""

    requires_auth = False
    url = f"/{DOMAIN}/ha-mushroom-cards.js"
    name = "ha_mushroom_cards:frontend"

    def __init__(self, js_path: str, etag: str) -> None:
        self._etag = etag
        self._content = Path(js_path).read_bytes()

    async def get(self, request: web.Request) -> web.Response:
        """Serve JS file from memory with immutable cache headers."""
        if request.headers.get("If-None-Match") == self._etag:
            return web.Response(status=304)
        return web.Response(
            body=self._content,
            headers={
                "Content-Type": "application/javascript; charset=utf-8",
                "Cache-Control": "public, max-age=31536000, immutable",
                "ETag": self._etag,
            },
        )


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up HA Mushroom Cards component."""
    hass.data.setdefault(DOMAIN, {})

    if hass.data[DOMAIN].get("frontend_registered"):
        return True

    js_path = str(Path(__file__).parent / "ha-mushroom-cards.js")
    url = f"/{DOMAIN}/ha-mushroom-cards.js"

    file_hash = ""
    try:
        file_hash = hashlib.md5(Path(js_path).read_bytes()).hexdigest()[:8]
    except OSError:
        pass

    hass.http.register_view(HacJsView(js_path, f'"{file_hash}"'))

    cache_param = f"?v={file_hash}" if file_hash else ""
    add_extra_js_url(hass, f"{url}{cache_param}")

    hass.data[DOMAIN]["frontend_registered"] = True
    _LOGGER.info("HA Mushroom Cards frontend resource registered")
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up HA Mushroom Cards from a config entry."""
    hass.data.setdefault(DOMAIN, {})

    scheduler = HacScheduler(hass)
    hass.data[DOMAIN]["scheduler"] = scheduler
    await scheduler.async_load()

    async_register_websocket_api(hass)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    data = hass.data.get(DOMAIN)
    if data and "scheduler" in data:
        await data["scheduler"].async_unload()
    hass.data.pop(DOMAIN, None)
    return True
