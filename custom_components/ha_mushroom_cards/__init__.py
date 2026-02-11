"""HA Mushroom Cards - Custom Lovelace cards for Home Assistant."""

import hashlib
import os
import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.frontend import add_extra_js_url

from .const import DOMAIN
from .scheduler import HacScheduler
from .websocket_api import async_register_websocket_api

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up HA Mushroom Cards component."""
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up HA Mushroom Cards from a config entry."""
    hass.data.setdefault(DOMAIN, {})

    # Initialize scheduler
    scheduler = HacScheduler(hass)
    hass.data[DOMAIN]["scheduler"] = scheduler
    await scheduler.async_load()

    # Register WebSocket API
    async_register_websocket_api(hass)

    # Register frontend resources
    integration_path = os.path.dirname(__file__)
    js_path = os.path.join(integration_path, "ha-mushroom-cards.js")

    url = "/local/ha-mushroom-cards/ha-mushroom-cards.js"

    file_hash = ""
    try:
        with open(js_path, "rb") as f:
            file_hash = hashlib.md5(f.read()).hexdigest()[:8]
    except OSError:
        pass

    await hass.http.async_register_static_paths([
        StaticPathConfig(url, js_path, True)
    ])

    cache_param = f"?v={file_hash}" if file_hash else ""
    add_extra_js_url(hass, f"{url}{cache_param}")

    _LOGGER.info("HA Mushroom Cards frontend resource registered")
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    data = hass.data.get(DOMAIN)
    if data and "scheduler" in data:
        await data["scheduler"].async_unload()
    hass.data.pop(DOMAIN, None)
    return True
