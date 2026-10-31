# APPNAME

A free game on FreeGameStore.

- Subdomain: `APPNAME.freegamestore.online`
- Dev: `pnpm install && pnpm dev`
- Build: `pnpm build`
- Deploy: `git push origin main` (auto-deploys to R2 via GitHub Actions)

Free, MIT-licensed, no tracking. For platform conventions, read
https://freegamestore.online/skills.md
before writing or changing anything.

## Styling
- Tailwind 4 on tokens (ADR-001): `bg-panel`, `bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `text-danger`.
- `index.css` holds tokens, `@source`, `@theme inline` and base rules only. No feature classes.
- No inline `style={{}}` unless the value is computed at runtime; comment it `dynamic`.
- Floating UI (menus, dialogs, results) uses an opaque surface: `bg-panel`.
- Never inject CSS from JS. Canvas/WebGL drawing is exempt.
- `--bg` stays only for the brand-tokens check. Don't use `--surface`, `--border`, `--glass`, `--dock`, `--error`.
- `pnpm build` runs `scripts/check-styling.mjs` and fails on a regression.
