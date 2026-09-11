# Architecture

PunyHuman is a local-first browser application. Its architecture optimizes for privacy, auditability, fast startup, and low maintenance cost.

## System boundaries

```text
User input
   │
   ▼
Accessible application shell (`index.html`)
   │
   ├── UI orchestration (`src/app.js`)
   │      └── state, events, clipboard, theme, command palette
   │
   └── pure transformations (`src/core.js`)
          └── JSON, JWT, Base64, URL, UUID, SHA-256

Browser platform
   ├── Web Crypto API
   ├── Service Worker + Cache Storage
   ├── Clipboard API
   └── localStorage (theme preference only)
```

There is no application server, telemetry pipeline, user database, or runtime dependency.

## Architectural decisions

| Decision | Why | Trade-off |
| --- | --- | --- |
| Browser-only processing | Sensitive payloads never need to leave the device | Very large inputs are limited by device resources |
| Zero runtime dependencies | Smaller supply-chain surface and instant startup | Some utilities require careful standards-based implementation |
| Pure transformation core | Easy unit testing and reusable behavior | Browser APIs need thin adapters |
| Progressive Web App | Offline availability without an app store | Cache lifecycle must be explicitly versioned |
| Static deployment | Portable hosting and low operational burden | No server-side collaboration features |

## Data and trust model

- Inputs remain in page memory and are not persisted.
- Theme preference is the only value written to `localStorage`.
- The service worker caches application assets, never user content.
- The application makes no analytics or API requests.
- JWT inspection decodes data; it does **not** verify signatures or trust claims.

## Change boundaries

New tools should be implemented as pure functions in `src/core.js`, exposed through the registry in `src/app.js`, and covered by tests. A network-dependent tool requires a separate architectural decision record and explicit user consent.

## Quality attributes

1. **Privacy** — no implicit network transfer.
2. **Accessibility** — keyboard complete, semantic, readable, motion-safe.
3. **Performance** — no framework runtime or dependency waterfall.
4. **Reliability** — deterministic transformations and explicit errors.
5. **Maintainability** — small modules, documented decisions, native tooling.
