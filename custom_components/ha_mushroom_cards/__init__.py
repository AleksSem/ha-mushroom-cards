"""HA Mushroom Cards - Custom Lovelace cards for Home Assistant."""

import os
import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.frontend import add_extra_js_url

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up HA Mushroom Cards component."""
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up HA Mushroom Cards from a config entry."""
    integration_path = os.path.dirname(__file__)
    js_path = os.path.join(integration_path, "ha-mushroom-cards.js")

    url = "/local/ha-mushroom-cards/ha-mushroom-cards.js"

    await hass.http.async_register_static_paths([
        StaticPathConfig(url, js_path, True)
    ])

    add_extra_js_url(hass, url)

    _LOGGER.info("HA Mushroom Cards frontend resource registered")
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    return True
