"""HA Mushroom Cards - Custom Lovelace cards for Home Assistant."""

import hashlib
import logging
from pathlib import Path

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.frontend import add_extra_js_url

from .const import DOMAIN
from .scheduler import HacScheduler
from .websocket_api import async_register_websocket_api

_LOGGER = logging.getLogger(__name__)

URL_BASE = f"/{DOMAIN}/ha-mushroom-cards.js"


def _get_js_version(js_path: Path) -> str:
    """Get MD5 hash of the JS bundle for cache busting."""
    try:
        return hashlib.md5(js_path.read_bytes()).hexdigest()[:8]
    except Exception:
        return "0"


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up HA Mushroom Cards component."""
    hass.data.setdefault(DOMAIN, {})

    if hass.data[DOMAIN].get("frontend_registered"):
        return True

    js_path = Path(__file__).parent / "ha-mushroom-cards.js"
    version = _get_js_version(js_path)
    url_with_version = f"{URL_BASE}?v={version}"

    await hass.http.async_register_static_paths(
        [StaticPathConfig(URL_BASE, str(js_path), cache_headers=True)]
    )

    add_extra_js_url(hass, url_with_version)

    hass.data[DOMAIN]["frontend_registered"] = True
    _LOGGER.info("HA Mushroom Cards frontend registered (v=%s)", version)
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
