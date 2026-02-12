"""HA Mushroom Cards - Custom Lovelace cards for Home Assistant."""

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


async def _cleanup_lovelace_resource(hass: HomeAssistant) -> None:
    """Remove stale entry from lovelace_resources (legacy cleanup)."""
    try:
        lovelace_data = hass.data.get("lovelace")
        if not lovelace_data:
            return
        resources = getattr(lovelace_data, "resources", None)
        if resources is None:
            return
        for item in resources.async_items():
            if DOMAIN in item.get("url", ""):
                await resources.async_delete_item(item["id"])
                return
    except Exception:
        pass


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up HA Mushroom Cards component."""
    hass.data.setdefault(DOMAIN, {})

    if hass.data[DOMAIN].get("frontend_registered"):
        return True

    js_path = Path(__file__).parent / "ha-mushroom-cards.js"

    # Static file serving (replaces HacJsView)
    await hass.http.async_register_static_paths(
        [StaticPathConfig(URL_BASE, str(js_path), cache_headers=False)]
    )

    # In-memory only — URL appears in HTML only after this runs. No persistence = no race.
    add_extra_js_url(hass, URL_BASE)

    # Remove stale lovelace resource from previous version (one-time cleanup)
    await _cleanup_lovelace_resource(hass)

    hass.data[DOMAIN]["frontend_registered"] = True
    _LOGGER.info("HA Mushroom Cards frontend registered")
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
