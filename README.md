# HA Mushroom Cards

Additional custom Lovelace cards for [Mushroom](https://github.com/piitaya/lovelace-mushroom) and Home Assistant.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=AleksSem&repository=ha-mushroom-cards&category=plugin)

## Table of Contents

- [Cards](#cards)
  - [Air Purifier Card](#air-purifier-card)
  - [Light Card](#light-card)
  - [Plug Card](#plug-card)
  - [Plug Group Card](#plug-group-card)
  - [Timer Card](#timer-card)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Air Purifier Card](#air-purifier-card-1)
  - [Light Card](#light-card-1)
  - [Plug Card](#plug-card-1)
  - [Plug Group Card](#plug-group-card-1)
  - [Timer Card](#timer-card-1)
  - [Entity Overrides](#entity-overrides)
  - [AQI Color Coding](#aqi-color-coding)
- [Development](#development)
- [Project Structure](#project-structure)
- [Support](#support)

## Cards

### Air Purifier Card

A card for controlling Xiaomi air purifiers with support for:

- Power on/off control with animated icon
- Preset mode selection (Auto, Silent, Favorite, Low, Medium, High)
- Favorite level slider (0–14)
- PM2.5, temperature, humidity, motor speed stats
- PM2.5 color coding based on AQI level
- Filter life progress bar with color coding
- Settings: child lock, LED, buzzer
- Compact view mode
- Animated icon
- Entity auto-discovery with manual override support
- Timer integration (schedule on/off via Python backend scheduler)
- Multi-language support (English, Russian)

### Light Card

A card for controlling smart lights with support for:

- Power on/off with light color tinting
- Brightness slider (1–100%)
- Color temperature gradient slider (Kelvin)
- Color/hue gradient slider (0–360°)
- Icon animation (pulse)
- Hide controls when light is off
- Compact view mode
- Timer integration (schedule on/off via Python backend scheduler)
- Multi-language support (English, Russian)

### Plug Card

A card for controlling smart plugs/sockets with support for:

- Power on/off control with animated icon
- Real-time power consumption (W)
- Daily, monthly, yearly energy stats
- Child lock toggle (card view)
- Editor includes power-on behavior select and child lock toggle (device controls)
- Compact view mode
- Timer integration (schedule on/off via Python backend scheduler)
- Device-based entity auto-discovery with manual override support
- Multi-language support (English, Russian)

### Plug Group Card

A group card for controlling multiple smart plugs together:

- Master toggle (all on/off)
- Aggregated power and consumption stats (summed across all plugs)
- Individual plug list with per-plug toggles
- Group child lock toggle
- Timer integration (schedule all on/off via Python backend scheduler)
- Device-based entity auto-discovery per plug
- Compact view mode
- Multi-language support (English, Russian)

### Timer Card

A standalone card for scheduling on/off timers for any entity:

- Preset durations (configurable)
- Custom duration and specific time modes
- Configurable action (turn_off, turn_on, toggle, custom service)
- Active timer badge with countdown, color-coded by action (green for on, red for off, amber for toggle)
- Recurring day-of-week timers (select days, auto-repeats weekly)
- Multi-language support (English, Russian)

## Installation

### HACS (Recommended)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=AleksSem&repository=ha-mushroom-cards&category=plugin)

Or manually:

1. Open HACS in Home Assistant
2. Go to **Frontend** section
3. Click the three dots menu → **Custom repositories**
4. Add `https://github.com/AleksSem/ha-mushroom-cards` with category **Lovelace**
5. Click **Install**
6. Restart Home Assistant
7. Go to **Settings → Devices & Services → Add Integration**
8. Search for **HA Mushroom Cards** and click **Submit**

> Cards load automatically on restart. The config entry enables timer/scheduler functionality.

### Manual

1. Copy the entire `custom_components/ha_mushroom_cards/` folder to your `config/custom_components/` directory
2. Restart Home Assistant
3. The frontend resource is registered automatically — no manual Lovelace resource needed
4. Go to **Settings → Devices & Services → Add Integration**
5. Search for **HA Mushroom Cards** and click **Submit**
6. This enables the timer/scheduler backend

> Cards load automatically on restart. The config entry enables timer/scheduler functionality.

## Configuration

### Air Purifier Card

```yaml
type: custom:hac-air-purifier-card
entity: fan.air_purifier
name: Air Purifier
show_name: true
show_state: true
show_toolbar: true
show_stats: true
show_settings: true
show_filter_info: true
compact_view: false
icon_animation: true
show_timer: false
```

#### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **Required** | Air purifier `fan` entity ID |
| `name` | string | Entity name | Card title |
| `show_name` | boolean | `true` | Show card name |
| `show_state` | boolean | `true` | Show current state |
| `show_toolbar` | boolean | `true` | Show preset mode toolbar |
| `show_stats` | boolean | `true` | Show PM2.5, temperature, humidity, motor speed |
| `show_settings` | boolean | `true` | Show child lock, LED, buzzer toggles |
| `show_filter_info` | boolean | `true` | Show filter life progress bar |
| `compact_view` | boolean | `false` | Compact card layout |
| `icon_animation` | boolean | `true` | Animate icon when active |
| `show_timer` | boolean | `false` | Show timer button for scheduling on/off |
| `timer_default_action` | string | `turn_off` | Default timer action (turn_off, turn_on, toggle) |

### Light Card

```yaml
type: custom:hac-light-card
entity: light.living_room
name: Living Room Light
show_name: true
show_state: true
show_brightness_control: true
show_color_temp_control: true
show_color_control: true
use_light_color: true
icon_animation: true
compact_view: false
hide_controls_when_off: false
show_timer: false
```

#### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **Required** | Light entity ID |
| `name` | string | Entity name | Card title |
| `show_name` | boolean | `true` | Show card name |
| `show_state` | boolean | `true` | Show current state |
| `show_brightness_control` | boolean | `true` | Show brightness slider (1–100%) |
| `show_color_temp_control` | boolean | `true` | Show color temperature gradient slider |
| `show_color_control` | boolean | `true` | Show color/hue gradient slider |
| `use_light_color` | boolean | `true` | Tint icon with the light's current color |
| `icon_animation` | boolean | `true` | Pulse animation when light is on |
| `compact_view` | boolean | `false` | Compact card layout |
| `hide_controls_when_off` | boolean | `false` | Hide sliders when light is off |
| `show_timer` | boolean | `false` | Show timer button for scheduling on/off |
| `timer_default_action` | string | `turn_off` | Default timer action (turn_off, turn_on, toggle) |

### Plug Card

```yaml
type: custom:hac-plug-card
entity: switch.smart_plug
name: Smart Plug
show_name: true
show_state: true
show_power: true
show_daily_consumption: true
show_monthly_consumption: true
show_yearly_consumption: true
show_settings: true
icon_animation: true
compact_view: false
show_timer: false
```

#### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **Required** | Smart plug `switch` entity ID |
| `name` | string | Entity name | Card title |
| `show_name` | boolean | `true` | Show card name |
| `show_state` | boolean | `true` | Show current state |
| `show_power` | boolean | `true` | Show real-time power consumption |
| `show_daily_consumption` | boolean | `true` | Show daily energy stats |
| `show_monthly_consumption` | boolean | `true` | Show monthly energy stats |
| `show_yearly_consumption` | boolean | `true` | Show yearly energy stats |
| `show_settings` | boolean | `true` | Show child lock toggle (card view) |
| `icon_animation` | boolean | `true` | Animate icon when active |
| `compact_view` | boolean | `false` | Compact card layout |
| `show_timer` | boolean | `false` | Show timer button for scheduling on/off |
| `timer_default_action` | string | `turn_off` | Default timer action (turn_off, turn_on, toggle) |

#### Entity Overrides

```yaml
type: custom:hac-plug-card
entity: switch.smart_plug
power_entity: sensor.smart_plug_power
daily_consumption_entity: sensor.smart_plug_energy_daily
monthly_consumption_entity: sensor.smart_plug_energy_monthly
yearly_consumption_entity: sensor.smart_plug_energy_yearly
child_lock_entity: switch.smart_plug_child_lock
power_on_behavior_entity: select.smart_plug_power_on_behavior
```

### Plug Group Card

```yaml
type: custom:hac-plug-group-card
entities:
  - switch.plug_1
  - switch.plug_2
  - switch.plug_3
name: Smart Plugs
show_name: true
show_state: true
show_power: true
show_daily_consumption: true
show_monthly_consumption: true
show_yearly_consumption: true
show_settings: true
show_individual: true
icon_animation: true
compact_view: false
show_timer: false
```

#### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entities` | string[] | **Required** | List of smart plug `switch` entity IDs |
| `name` | string | `"Plug Group"` | Card title |
| `show_name` | boolean | `true` | Show card name |
| `show_state` | boolean | `true` | Show current state (count of active plugs) |
| `show_power` | boolean | `true` | Show aggregated real-time power consumption |
| `show_daily_consumption` | boolean | `true` | Show aggregated daily energy stats |
| `show_monthly_consumption` | boolean | `true` | Show aggregated monthly energy stats |
| `show_yearly_consumption` | boolean | `true` | Show aggregated yearly energy stats |
| `show_settings` | boolean | `true` | Show group child lock toggle |
| `show_individual` | boolean | `true` | Show individual plug list with per-plug toggles |
| `icon_animation` | boolean | `true` | Animate icon when active |
| `compact_view` | boolean | `false` | Compact card layout |
| `show_timer` | boolean | `false` | Show timer button for scheduling on/off |
| `timer_default_action` | string | `turn_off` | Default timer action (turn_off, turn_on, toggle) |

### Timer Card

```yaml
type: custom:hac-timer-card
entity: fan.air_purifier
```

#### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **Required** | Target entity ID |
| `name` | string | Entity name | Card title |
| `show_name` | boolean | `true` | Show card name |
| `show_state` | boolean | `true` | Show current state |
| `default_action` | string | `turn_off` | Default action (turn_off, turn_on, toggle) |
| `custom_service` | string | — | Custom service to call (e.g. `script.my_script`) |
| `custom_service_data` | object | — | Data to pass to custom service |
| `presets` | number[] | `[15, 30, 60, 120]` | Preset duration buttons (minutes) |
| `show_presets` | boolean | `true` | Show preset duration buttons |

### Entity Overrides

Both Air Purifier and Plug cards use **device-based auto-discovery** — they look up the device via `hass.entities` device registry and find related entities by domain, device class, and keywords. This works reliably regardless of entity naming conventions.

If auto-discovery doesn't find the right entity, you can override any sensor manually:

#### Air Purifier Card

```yaml
type: custom:hac-air-purifier-card
entity: fan.air_purifier
pm25_entity: sensor.air_purifier_pm25
temperature_entity: sensor.air_purifier_temperature
humidity_entity: sensor.air_purifier_humidity
motor_speed_entity: sensor.air_purifier_motor_speed
filter_life_entity: sensor.air_purifier_filter_life
filter_used_time_entity: sensor.air_purifier_filter_used_time
favorite_level_entity: number.air_purifier_favorite_level
child_lock_entity: switch.air_purifier_child_lock
led_entity: switch.air_purifier_led
buzzer_entity: switch.air_purifier_buzzer
```

#### Plug Card

```yaml
type: custom:hac-plug-card
entity: switch.smart_plug
power_entity: sensor.smart_plug_power
daily_consumption_entity: sensor.smart_plug_energy_daily
monthly_consumption_entity: sensor.smart_plug_energy_monthly
yearly_consumption_entity: sensor.smart_plug_energy_yearly
child_lock_entity: switch.smart_plug_child_lock
power_on_behavior_entity: select.smart_plug_power_on_behavior
```

### AQI Color Coding

The PM2.5 stats row uses color coding based on air quality:

| PM2.5 | Level | Color |
|---|---|---|
| ≤ 12 | Good | Green |
| ≤ 35 | Moderate | Light Green |
| ≤ 55 | Unhealthy for Sensitive | Yellow |
| ≤ 150 | Unhealthy | Orange |
| ≤ 250 | Very Unhealthy | Deep Orange |
| > 250 | Hazardous | Red |

## Development

```bash
npm install
npm run build
npm run watch  # rebuild on changes
```

The build output goes to `custom_components/ha_mushroom_cards/ha-mushroom-cards.js`.

## Project Structure

```
src/
├── cards/
│   ├── air-purifier-card/
│   │   ├── controls/      # UI controls (power, preset, stats, filter, settings, favorite level)
│   │   ├── air-purifier-card.ts
│   │   ├── air-purifier-card-editor.ts
│   │   ├── const.ts
│   │   ├── styles.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── light-card/
│   │   ├── controls/      # UI controls (power, brightness, color temp, color)
│   │   ├── light-card.ts
│   │   ├── light-card-editor.ts
│   │   ├── const.ts
│   │   ├── styles.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── plug-card/
│   │   ├── controls/      # UI controls (power, stats, settings)
│   │   ├── plug-card.ts
│   │   ├── plug-card-editor.ts
│   │   ├── const.ts
│   │   ├── styles.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── plug-group-card/
│   │   ├── controls/      # UI controls (aggregated stats, plug list, group settings)
│   │   ├── plug-group-card.ts
│   │   ├── plug-group-card-editor.ts
│   │   ├── const.ts
│   │   ├── styles.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   └── timer-card/
│       ├── timer-card.ts
│       ├── timer-card-editor.ts
│       ├── const.ts
│       ├── styles.ts
│       └── types.ts
├── shared/
│   ├── components/        # Reusable UI components (hac-* prefix)
│   │   ├── gradient-slider.ts
│   │   ├── progress-bar.ts
│   │   ├── shape-icon.ts
│   │   ├── slider.ts
│   │   ├── state-info.ts
│   │   ├── state-item.ts
│   │   ├── timer-badge.ts
│   │   ├── timer-dialog.ts
│   │   ├── timer-picker.ts
│   │   └── toggle-button.ts
│   ├── controls/          # Shared render functions used across cards
│   │   └── timer-control.ts
│   └── styles/
│       ├── animations.ts
│       ├── card-styles.ts
│       ├── editor-styles.ts
│       ├── not-found-styles.ts
│       └── timer-styles.ts
├── translations/          # i18n (en, ru)
├── utils/
│   ├── base-element.ts
│   ├── colors.ts
│   ├── editor-helpers.ts
│   ├── entity.ts
│   ├── ha-helper.ts
│   ├── register-card.ts
│   ├── scheduler-api.ts
│   └── timer-utils.ts
├── ha-cards.ts            # Entry point
├── localize.ts
└── types.ts
```

## Support

If you'd like to support me or buy me a coffee:

[![Donate with PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=96G47VVQMMLFW&no_recurring=0&currency_code=EUR)
