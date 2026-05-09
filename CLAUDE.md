# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AutoDiag Pro v3.0** — A French-language single-page web application for automotive OBD2/DTC diagnostic code lookup. Targets imported vehicles (Japanese, European, American, Korean, Chinese). No build tooling, no dependencies, no frameworks.

## Running the App

Open `index.html` directly in a browser — there is no build step, server, or package manager. All assets are self-contained.

## Architecture

Three files make up the entire application:

| File | Role |
|---|---|
| `index.html` | All CSS (embedded `<style>`), HTML structure, and a small inline `<script>` for scanner panel toggle |
| `dtc-db.js` | The `DTC_DB` object — ~268 DTC code entries keyed by code string (e.g. `"P0300"`) |
| `app.js` | All application logic, static data arrays (`BRANDS`, `SYMPTOM_INDEX`, `PINNED_CODES`, `GLOSSARY`), and DOM rendering |

**Script load order matters**: `index.html` loads `dtc-db.js` before `app.js` because `app.js` depends on the `DTC_DB` global at init time.

## DTC_DB Entry Schema

Every entry in `dtc-db.js` follows this structure:

```js
"P0300": {
  title: "Short code title",           // Displayed as card heading
  system: "Moteur — Allumage",         // Used for filtering — must match FILTER_MAP/SYS_MAP strings
  severity: "high",                    // "low" | "medium" | "high" | "critical"
  desc: "Longer description...",
  causes: [                            // Sorted highest-probability first
    ["Cause description", "90%"],
    ["Another cause",     "50%"]
  ],
  steps: ["Step 1", "Step 2"],         // Numbered repair guide
  parts: [["Part name", "20–50€"]],   // Shown in parts grid
  cost: "100–400€",                    // Estimated total repair cost
  warning: null,                       // String for critical alert box, or null
  keywords: ["allumage","cylindre"]   // Used by keyword-based filter lookups
}
```

## Filter System

There are two filter maps in `app.js` that determine which codes appear under each category chip:

- **`FILTER_MAP`** (homepage "Codes Fréquents" tab) — filters `DTC_DB` by `f.sys` (matches against `entry.system`) or `f.kw` (matches against `entry.keywords`)
- **`SYS_MAP`** (the "Par Système" tab) — same matching logic

When adding new DTC entries, the `system` field must either match an existing category string already in these maps, or the maps must be updated to cover the new system name. Mismatched `system` strings cause entries to appear only under "Tous" and never under a specific filter chip.

## Static Data in app.js

- **`BRANDS`** — array of brand objects, each with a `codes` array listing typical DTCs for that brand. Used in the "Par Marque" tab.
- **`SYMPTOM_INDEX`** — maps French symptom keyword arrays to DTC code arrays. Powers the symptom search mode.
- **`PINNED_CODES`** — ordered list of codes featured on the homepage before any filter is applied.
- **`GLOSSARY`** — French automotive term definitions shown in the Glossary tab.

## Severity Levels

| Value | CSS class | Color | Behavior |
|---|---|---|---|
| `"low"` | `sl` | Green | Static dot |
| `"medium"` | `sm` | Yellow | Static dot |
| `"high"` | `sh` | Red | Static dot |
| `"critical"` | `sc` | Red | Pulsing animation |

## State & localStorage

Search history is stored in `localStorage` under the key `autodiag_history` as a JSON array of up to 10 DTC code strings. The `renderHistory()` function reads this on every update.

## CSS

All CSS lives inside a single `<style>` block in `index.html`. Design tokens are CSS custom properties on `:root`:

```css
--p  (primary red), --pd (primary dark), --bg (background), --s (surface),
--s2 (surface 2),   --b  (border),       --t  (text),       --m  (muted),
--g  (green),       --y  (yellow),       --r  (red),        --bl (blue),
--pu (purple)
```

## Content Language

All user-facing text, DTC descriptions, causes, steps, and tooltips are in **French**. New content must follow this convention.
