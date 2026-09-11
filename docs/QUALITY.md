# Quality strategy

Quality is enforced in layers so that inexpensive checks fail first.

## Definition of done

A change is complete when:

- behavior is covered by a focused test or a documented manual check;
- invalid input produces a useful error;
- keyboard and narrow-screen interaction still work;
- no user content is transmitted or persisted unexpectedly;
- documentation reflects architectural or behavioral changes;
- `npm run check` passes.

## Automated checks

| Layer | Command | Purpose |
| --- | --- | --- |
| Syntax | `node --check` | Reject invalid JavaScript |
| Unit | `node --test` | Verify deterministic transformations and edge cases |
| Repository contract | `node scripts/verify-project.js` | Confirm required public-project files and manifest fields |
| CI | GitHub Actions | Run the same checks for every pull request |

## Manual release checks

- Test at approximately 1440px and 390px viewport widths.
- Navigate every tool and action without a pointer.
- Verify visible focus and readable error states.
- Check light and dark themes.
- Confirm the network panel shows no application data requests.
- Verify offline reload after the service worker has installed.

## Performance budget

- Zero runtime package dependencies.
- No blocking third-party scripts or fonts.
- Keep the initial static payload intentionally small.
- Prefer platform APIs and measure before introducing abstraction.

## Security posture

PunyHuman is a transformation utility, not an authority. Decoded JWT claims are untrusted. Hashing is not encryption. Security-sensitive language in the interface and documentation must remain precise.
