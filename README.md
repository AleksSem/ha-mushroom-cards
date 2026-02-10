# HA Mushroom Cards

Additional custom Lovelace cards for [Mushroom](https://github.com/piitaya/lovelace-mushroom) and Home Assistant.

## Cards

### Air Purifier Card

A card for controlling Xiaomi air purifiers with support for:

- Power on/off control
- Preset mode selection (Auto, Silent, Favorite, Fan)
- Favorite level adjustment
- PM2.5, temperature, humidity stats
- Filter life remaining
- Settings: child lock, LED, buzzer
- Compact view mode
- Animated icon

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** section
3. Click the three dots menu → **Custom repositories**
4. Add `https://github.com/AleksSem/ha-mushroom-cards` with category **Integration**
5. Click **Install**
6. Restart Home Assistant
7. Go to **Settings → Devices & Services → Add Integration** and search for **HA Mushroom Cards**

### Manual

1. Copy the `custom_components/ha_mushroom_cards` folder to your `config/custom_components/` directory
2. Restart Home Assistant
3. Go to **Settings → Devices & Services → Add Integration** and search for **HA Mushroom Cards**

## Configuration

Add the card to your Lovelace dashboard:

```yaml
type: custom:air-purifier-card
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
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **Required** | Air purifier `fan` entity ID |
| `name` | string | Entity name | Card title |
| `show_name` | boolean | `true` | Show card name |
| `show_state` | boolean | `true` | Show current state |
| `show_toolbar` | boolean | `true` | Show preset mode toolbar |
| `show_stats` | boolean | `true` | Show PM2.5, temperature, humidity |
| `show_settings` | boolean | `true` | Show child lock, LED, buzzer |
| `show_filter_info` | boolean | `true` | Show filter life info |
| `compact_view` | boolean | `false` | Compact card layout |
| `icon_animation` | boolean | `true` | Animate icon when active |

### Entity Overrides

If your purifier uses non-standard entity naming, you can override sensor entities:

```yaml
type: custom:air-purifier-card
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

## Development

```bash
npm install
npm run build
```

The build output goes to `custom_components/ha_mushroom_cards/ha-mushroom-cards.js`.
