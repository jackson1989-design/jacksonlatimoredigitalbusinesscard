# Latimore Digital Business Card (Fixed)

This repo is a *working* Vite + React + Tailwind project that matches your current mobile UI and keeps the AI module stable.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

## AI setup (two options)

### Option A — fastest (key in browser)
Set `VITE_GEMINI_API_KEY` in `.env`.

⚠️ Note: browser keys can be viewed by anyone in the built JS. Use Option B for production.

### Option B — recommended (key stays secret)
1) In `.env`, set:
```bash
VITE_AI_PROXY_URL=/api/gemini
```

2) In Vercel Project → Settings → Environment Variables, set:
- `GEMINI_API_KEY=...`

The frontend will call `/api/gemini`, and Vercel will call the Gemini API server-side.

## Build

```bash
npm run build
npm run preview
```

## “Function prop” fix (common cause)
If you see a message like “expected a function prop” (or a handler not working), make sure you **pass** the function, not **call** it:

✅ Correct:
```jsx
<LegacyAI onClose={() => setActiveOverlay(null)} />
```

❌ Wrong (calls immediately; passes `undefined`):
```jsx
<LegacyAI onClose={setActiveOverlay(null)} />
```
