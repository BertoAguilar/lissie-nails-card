# Lissie Nails — digital business card

A single-page site reached via QR code, NFC tap, or a link from Instagram/WhatsApp. Opens instantly in a mobile browser, nothing to install.

## Before going live

- **Business info**: edit [src/config/business.js](src/config/business.js) — phone, WhatsApp, Instagram, Maps link, Google reviews link, Square booking link, address, hours.
- **Logo**: replace [src/assets/brand/logo.svg](src/assets/brand/logo.svg) and `logo.png` with the real brand files (the current ones are placeholders).
- **Favicon / app icon**: replace `public/favicon.svg` and `public/apple-touch-icon.png`.
- **Social preview image**: replace `public/og-image.png` (1200×630 recommended).
- **Gallery photos**: swap the files in `src/assets/gallery/` and update the imports in [src/components/Gallery.jsx](src/components/Gallery.jsx).
- **Translations**: wording lives in `src/i18n/locales/{es,pt,en}.json`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy (Vercel)

Push this folder to its own GitHub repo and import it in Vercel, or deploy directly:

```bash
npx vercel
```

`vercel.json` already rewrites all routes to `index.html` so client-side routing survives a page refresh.

## Generate a printable QR code

Once you have the production URL:

```bash
npm run qr -- https://your-production-url.com
```

Outputs `qr-code.png` (1024px) and `qr-code.svg` in the project root, in `--capers` on a light background.
