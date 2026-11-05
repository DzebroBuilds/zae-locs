# Zae Locs

Seattle-rooted loc studio website and client management demonstration, developed by **OASISWEB&AI**.

## Preview

Serve the `dist` folder with any static web server, or open `dist/index.html` locally. Switch to the studio dashboard using the top bar.

The demo includes service selection, a booking calendar with duration/conflict checks, sample client profiles, care notes, appointment changes, and promotional email previews.

## GitHub Pages

The `Publish Zae Locs demo` workflow publishes `dist` on pushes to `main`. In the repository's Settings → Pages, select **GitHub Actions** as the source. All website asset links are relative, so repository-based Pages URLs work.

## Demo boundaries

All client data is fictional. Bookings, notes, and campaigns are saved only in the visitor's browser. No real appointments, payments, or emails are created. Generated concept imagery must be replaced with Zae-approved photographs before a business launch. Service prices and policies require Zae's confirmation.

## Dependencies

Material UI and Emotion are recorded in `package.json` and `package-lock.json` for future React work. The present demo is plain HTML, CSS, and JavaScript and requires no package installation or build to publish.

## Checks

Run `node --check dist/app.js` and `node verify.cjs`.
