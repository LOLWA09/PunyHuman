<div align="center">
  <img src="assets/icon.svg" width="92" alt="PunyHuman logo" />
  <h1>PunyHuman</h1>
  <p><strong>Big tools. Zero backend.</strong></p>
  <p>A fast, private, offline-capable developer toolbox that runs entirely in your browser.</p>

  [![CI](https://github.com/LOLWA09/PunyHuman/actions/workflows/ci.yml/badge.svg)](https://github.com/LOLWA09/PunyHuman/actions/workflows/ci.yml)
  [![Deploy](https://github.com/LOLWA09/PunyHuman/actions/workflows/pages.yml/badge.svg)](https://github.com/LOLWA09/PunyHuman/actions/workflows/pages.yml)
  [![License: MIT](https://img.shields.io/badge/License-MIT-f15b3a.svg)](LICENSE)
</div>

## Why PunyHuman?

Most online utilities send pasted data to a server, bury one task under ads, or require an account. PunyHuman keeps the useful part and removes everything else.

- **Private by default** — all processing happens on-device.
- **Offline-capable** — installable as a lightweight PWA.
- **Fast** — zero runtime dependencies and no framework tax.
- **Accessible** — semantic HTML, keyboard navigation, visible focus, and reduced-motion support.
- **Useful** — JSON, JWT, Base64, URL, UUID, and SHA-256 tools in one focused interface.

## Quick start

```bash
git clone https://github.com/LOLWA09/PunyHuman.git
cd PunyHuman
npm test
npm run dev
```

Open `http://localhost:4173`. Press <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> to switch tools.

## Architecture

```text
index.html             Semantic application shell
src/core.js            Pure, testable data transformations
src/app.js             UI state and browser integration
src/styles.css         Responsive design system and themes
service-worker.js      Offline cache strategy
tests/core.test.js     Node-native unit tests
.github/workflows      CI and GitHub Pages deployment
```

The project deliberately uses browser standards instead of a large dependency tree. This reduces supply-chain risk, keeps startup instant, and makes the code approachable for contributors.

## Roadmap

- [ ] JSON tree viewer and JSONPath queries
- [ ] Text diff and regex playground
- [ ] Import/export custom tool presets
- [ ] Localization

Ideas and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a change.

## Security & privacy

PunyHuman has no analytics, API, database, or telemetry. See [SECURITY.md](SECURITY.md) for responsible disclosure.

## License

MIT © [LOLWA09](https://github.com/LOLWA09)
