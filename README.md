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

Material UI and Emotion are recorded in `package.json` and `package-lock.json` for future React work. The booking and dashboard use plain HTML, CSS, and JavaScript. The hero uses a React island bundled with esbuild. Run `npm ci` and `npm run build` before publishing. The Pages workflow does this automatically.

## Checks

Run `node --check dist/app.js` and `node verify.cjs`.

## LightRays

The JavaScript/plain-CSS component in `src/components/LightRays.jsx` and `LightRays.css` is copied unchanged from the [React Bits registry](https://reactbits.dev/r/LightRays-JS-CSS.json). The registry lists no additional dependencies. React, React DOM, and esbuild provide the mount and build. `src/hero-rays.jsx` applies the requested blue ray configuration inside a 600px hero, adds a pause control, and shows a still background for reduced-motion preferences. Without WebGL, the heading and booking controls remain usable. [Component documentation](https://reactbits.dev/backgrounds/light-rays).

## GlassSurface

The hero booking control uses the exact React Bits GlassSurface JS-CSS component from https://reactbits.dev/r/GlassSurface-JS-CSS.json. It uses the supplied 320×76 rounded configuration and refraction settings. The registry lists no extra dependencies. Logo-shaped and photo-backdrop variants remain available in the component for approved assets; placeholder /logo.svg and /photo.jpg are not published.

## VariableProximity

The hero title uses the exact React Bits JS-CSS VariableProximity registry source from https://reactbits.dev/r/VariableProximity-JS-CSS.json. Its stylesheet loads Roboto Flex with optical-size and weight axes. The label is ZAE LOCS; the requested weight/optical-size ranges, radius 100, linear falloff, smoothing 0.2, scale 1, lift 0, and idleWave false are preserved. Font size is 64px with a phone-size adjustment. Reduced motion shows a static title. No extra packages are listed by the registry.

## ScrollExpand

The studio portrait uses the exact React Bits JS-CSS ScrollExpand source from https://reactbits.dev/r/ScrollExpand-JS-CSS.json. It uses the existing art-1.jpg concept portrait, window scrolling, zoom 1.35, and studio copy. The reveal is outside the clipped hero so viewport sticky positioning works. Reduced-motion visitors receive a still portrait with all copy visible. The registry lists no extra packages.

## Dark theme

The public website, booking dialogs, client dashboard, and email previews use dark charcoal/evergreen surfaces with readable light text. Main and secondary text and button labels were checked for at least 4.5:1 contrast. CSS filenames are content-versioned by the build to prevent old light styles surviving an update.

## Full-site background

LightRays is mounted into a fixed, full-viewport background outside the clipped hero, so the same effect covers the header, hero, gallery, services, and dashboard as the visitor scrolls. The hero glass control and pause control remain in the hero. Broad page surfaces are transparent; content panels use dark translucent navy for readability.
