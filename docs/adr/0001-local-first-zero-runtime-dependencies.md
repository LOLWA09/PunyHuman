# ADR 0001: Local-first architecture with zero runtime dependencies

- **Status:** Accepted
- **Date:** 2026-09-11

## Context

Developer utilities commonly process tokens, payloads, URLs, and configuration that may contain sensitive information. Sending that content to a backend increases privacy risk and operating complexity. A dependency-heavy frontend also adds startup, maintenance, and supply-chain costs disproportionate to these transformations.

## Decision

PunyHuman will perform transformations in the browser and use standards-based APIs before adding runtime dependencies. The static application will remain deployable to any file host. User-provided values will not be persisted or transmitted.

## Consequences

### Positive

- Sensitive inputs remain on-device.
- Hosting is inexpensive and portable.
- Startup is fast and the dependency attack surface is minimal.
- Core transformations are straightforward to test.

### Negative

- CPU- or memory-heavy work is constrained by the client device.
- Browser compatibility must be considered directly.
- Features requiring shared state need a separate architecture.

## Guardrails

A contribution that adds a network request or runtime dependency must document:

1. the user problem it solves;
2. why a platform API is insufficient;
3. privacy and security implications;
4. bundle and maintenance cost;
5. removal or migration strategy.
