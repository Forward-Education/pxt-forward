# Forward widgets for simulated Jacdac devices

Status: **parked**, 2026-10-08. Plan M3, part 2.

Not pursued for now: real hardware compatibility is the priority, and hardwareless simulation isn't. Real modules report their own product id, so they get Forward's widgets without this change. Nothing here has been sent upstream. The patch applies to jacdac-ts `main` at `32506e6c`; re-check it against current `main` before picking this up again.

## The problem

- **Widgets need a product ID.** Forward's simulator widgets (`FwdDialWidget`, `FwdDpadWidget` and others, in jacdac-docs `src/components/dashboard/DashboardFwdEduWidgets.tsx`) are chosen by the device's product identifier.
- **Simulated devices have none.** When a MakeCode program uses a Jacdac role with no device attached, jacdac-ts `RoleManagerClient.startSimulators()` creates a simulated device. Its control service reports product id `0`, so students see Jacdac's generic widgets.
- **The FIFA kit is split.** Its roles (`fifaBrain/servo1?srvo=0`, `fifaBrain/relay`, ...) don't group into one simulated device. `parentName()` ignores the `fifaBrain/` prefix as soon as a role has a query. So the kit becomes four separate devices, and servo 2 and 3 fail ("service not found at offset 1").

## The fix, in three steps

### 1. jacdac-ts: a `prod` role-query hint (PR to jacdac/jacdac-ts)

The change is in `jacdac-ts-simulated-product-id.patch`, against jacdac-ts `main` at `32506e6c`:

- **New constant:** `ROLE_QUERY_PRODUCT = "prod"`, next to `dev`, `srvo` and `srvi`.
- **Reading the hint:** a new `roleProductIdentifier(role)` reads `?prod=0x...`.
- **Setting the ID:** `startSimulators()` sets that product identifier on the control service of each simulated device it creates. For a grouped device, it uses the first hint among the device's roles.
- **Grouping fix:** `parentName()` falls back to the `parent/` prefix of the role name when the query has no `dev=`. So `fifaBrain/...?srvo=N` roles share one device again.

**Compatibility:**
- Roles without `prod` behave exactly as before.
- pxt-jacdac on the micro:bit ignores unknown role-query keys (`ClientRoleQuery` in `routing.ts`, v1.9.42 only reads `dev`, `srvi` and `srvo`), so real hardware binding is unchanged.

**Test** (`jacdac-ts-test-prod-hint.js`, run against a jacdac-ts build):

| Roles | Before | After |
|---|---|---|
| FIFA kit as today | 4 devices, id 0; servo 2 and 3 fail | 1 device (3 servos and the relay), id 0 |
| FIFA kit with `&prod=0x37a2f1fb` | 4 devices, id 0 | 1 device, id `0x37a2f1fb` |
| `dial1` | 1 device, id 0 | 1 device, id 0 |
| `dial1?prod=0x378f7673` | 1 device, id 0 | 1 device, id `0x378f7673` |

The type check is clean, and the diff is 53 lines added and 8 removed, in 2 files.

Suggested PR text:

> **Simulated devices: product identifier hint and parent grouping with queries**
>
> 1. A role may carry `prod=<product identifier>` in its query (e.g. `dial1?prod=0x378f7673`).
>    Simulators started for the role report it in the control service's product identifier,
>    so dashboards can show product-specific widgets (the Forward Education widgets in
>    jacdac-docs key on it). Device-side role binding ignores the key.
> 2. `parentName` now falls back to the `parent/` prefix when a role has a query without
>    `dev=`. Before, `brain/servo1?srvo=0` and `brain/servo2?srvo=1` became separate
>    simulated devices and the second failed with "service not found at offset 1".

### 2. jacdac-docs: bump jacdac-ts and rebuild the simulator

- **Bump:** once the PR is merged, bump the `jacdac-ts` submodule on `makecodesim`. No jacdac-docs code change is needed, because the widgets already read the product identifier.
- **Rebuild:** run pxt-jacdac's `buildsim.yml`, or Forward's `fwd-jacdac-sim.yml`.
- **Pin:** update `forward/jacdac-sim.json`.

### 3. Forward extensions: add the hint to each role

One-line changes per module. Product IDs are taken from the Jacdac catalog (`jacdac-spec/devices/forward-education/`), because that's what the widgets key on.

| Role (pxt-fwd-modules, pxt-fwd-fifa) | Catalog device | Hint |
|---|---|---|
| `dial1` to `dial4`, `dialButton1` to `dialButton4` | Dial Button | `?prod=0x378f7673` |
| `color1`.., `colorLED1`.. | Color Sensor | `?prod=0x39c53dd6` |
| `current1`.., `voltage1`.. | Energy Sensor | `?prod=0x36c78770` |
| `ec1`.. | EC Sensor | `?prod=0x34b459d9` |
| `float1`.. | Float Sensor | `?prod=0x34b659d2` |
| `lcd1`.. | LCD Character Screen | `?prod=0x34baa9d2` |
| `ledRing1`.. | LED Lights | `?prod=0x3ed2e79f` |
| `lights1`.. | Lights | `?prod=0x3156cfa7` |
| `line1?srvo=0`.. | Line Sensor | `&prod=0x3ba37612` |
| `moisture1`.. | Moisture Sensor | `?prod=0x33e0aa89` |
| `pH1`.. | pH Sensor | `?prod=0x3fa8238e` |
| `pir1`.. | PIR Sensor | `?prod=0x34b429d9` |
| `pump1`.. | Breakout Board + Relay + Pump | `?prod=0x383d1fb4` |
| `RPM1`.. | RPM Sensor | `?prod=0x39f8e291` |
| `solar1`.. | Solar Sensor | `?prod=0x3beb0497` |
| `sonar1`.. | Sonar Sensor | `?prod=0x373aabf1` |
| `tVOC1`.. | eCO2 Sensor | `?prod=0x34f459d9` |
| `temperature1`.. | Temperature Probe | `?prod=0x3156cfa9` |
| `touch1`.. | Touch Sensor | `?prod=0x3f71f9d1` |
| `fifaBrain/servo1?srvo=0` .. `fifaBrain/battery` | FIFA Foundation Breakout | `&prod=0x37a2f1fb` / `?prod=0x37a2f1fb` |
| pxt-dpad, pxt-rtc, pxt-neopixel roles | D-Pad, Time RTC, Neopixel | `0x30c98358`, `0x3a2f8c01`, `0x3366bd64` |

Then tag new releases and update the pins in `forward/extensions.json`.

## Caveats

- **Dial and dial button** are two roles on one physical device. Without a shared `parent/` prefix they simulate as two devices, each with the Dial Button product id. Give them a prefix (`dial1/rotary`, `dial1/button`) if the widget needs both services together.
- **FIFA product ids** (from the FIFA hardware session, 2026-10-08):
  - The brain firmware has two targets. `fwd-fifa-breakout-b` covers every board from REV_B through REV_F and reports `0x37a2f1fb`, so that's the right hint. Only the old REV_A prototypes (`fwd-fifa-breakout`) report `0x37a2f1fa`.
  - Anything keyed on product id would treat REV_A bench boards as a different device.
  - The firmware still has a TODO for catalog registration of both ids (`firmware/targets/fwd-fifa-breakout/profile/fifa-breakout.c`). Check whether it's stale, since the `0x37a2f1fb` catalog entry was merged into jacdac-docs on 2026-09-28.
- **FIFA role strings:** pxt-fwd-fifa v0.1.6 (motor sides, stop ramp, wheel spacing, encoder sign) left the `fifaBrain/*` role strings unchanged, so it carries no risk of resetting saved bindings.
- **FIFA battery:** jacdac-ts has no simulator for DC voltage measurement, so `fifaBrain/battery` stays unsimulated.
- **Firmware/catalog mismatches** already noted elsewhere (flex, sonar, neopixel's service) don't affect simulation, because the hints use catalog ids. They do matter on real hardware.
- **Saved bindings:** changing a role string may make the micro:bit forget a saved role binding once after the update, if bindings are stored by the full string. Check on hardware before releasing.
