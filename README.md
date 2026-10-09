# ROEUY MC — Premium TikTok Taplink

A fast, mobile-first link-in-bio landing page made with plain HTML, CSS, and JavaScript. It has no backend and intentionally does **not** display invented visitor metrics or a fake admin panel.

## Files

```text
index.html          Page structure, metadata, and CDN references
style.css           Mobile-first gaming / glassmorphism design
script.js           One editable configuration object + interactivity
assets/profile.png  Profile avatar
assets/favicon.png  Favicon
```

## Customize the page

Open **`script.js`** and edit the `SITE_CONFIG` object at the top:

- `profile`: name, handle, avatar filename, English / Khmer bios, labels.
- `links`: button text, Lucide icon name, glow color, and destination URL.
- `socials`: the small footer icon links.
- `footer`: footer copy in both languages.

To add a button, duplicate an object in `links`. To remove one, delete that object. Replace every `example.com` and `your_*` URL with your own real link before going live.

The UI uses [Lucide](https://lucide.dev/icons/) via a small CDN script. Use any Lucide icon name in the `icon` field (for example: `instagram`, `message-circle`, `wallet`, or `globe-2`). Google Fonts are loaded from Google Fonts. Both are optional external enhancements; the core page works without a framework or build process.

## Run locally

Option 1: double-click `index.html` to open it in a browser.

Option 2: serve the folder locally (recommended for testing share/copy features):

```bash
cd /path/to/your/project
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy free

### GitHub Pages

1. Create a new GitHub repository and upload these files, keeping the `assets` folder intact.
2. In the repository go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**, choose `main`, and choose `/ (root)`.
4. Save. GitHub will provide your public `https://username.github.io/repository-name/` link.

### Netlify

1. Log in at [netlify.com](https://www.netlify.com/).
2. Drag this project folder into Netlify Drop, or import its GitHub repository.
3. No build command or publish-directory setting is needed; the project root is the publish directory.
4. Netlify gives you a live URL immediately. You can customize the domain in Site settings.

### Vercel

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com/), select **Add New → Project**, and import the repository.
3. Choose **Other** as the framework preset if asked. Leave build settings empty.
4. Deploy.

## Notes

- The share button opens the native Web Share sheet where the browser supports it; elsewhere it copies the current page URL.
- Theme and language preferences are saved only in the visitor's browser using `localStorage`.
- The profile badge is a decorative creator badge, **not** an official TikTok verification mark.
- No user data is collected and no visitor counter is included because no real analytics/backend has been connected.
