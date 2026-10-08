# Birthday Surprise Website

A premium, mobile-first birthday experience built with plain HTML, CSS, and JavaScript. No password, no login, no backend — just open the link and the surprise begins.

Perfect for deploying on **Netlify** and sending as a gift link.

---

## Quick customize checklist

1. Replace `assets/her-photo.jpg`
2. (Optional) Add `assets/music.mp3`
3. Edit her name and messages in `script.js` → `birthdayConfig`
4. Your name is optional and not shown in the ending

---

## 1. Replace her photo

1. Export or crop a portrait photo (recommended ~800–1200px wide, JPG or WebP).
2. Name it exactly: `her-photo.jpg`
3. Put it in the `assets/` folder, replacing any placeholder.

If the photo is missing, the site shows a graceful placeholder and still works.

**Tip:** Keep the file under ~500KB so it loads quickly on mobile.

---

## 2. Add music (optional)

1. Choose a soft instrumental or meaningful song (MP3).
2. Name it: `music.mp3`
3. Place it in `assets/`

Music starts only after she taps **Open Your Surprise**. A 🔊 / 🔇 control appears in the corner.

If `music.mp3` is missing, the site runs normally with no errors.

You can change the path in `script.js`:

```js
musicFile: "assets/music.mp3"
```

---

## 3. Change her name

Open `script.js` and edit:

```js
const birthdayConfig = {
  herName: "HER_NAME",  // ← change this
  ...
};
```

---

## 4. Your name (optional)

```js
yourName: "",
```

If you fill this in, it appears on the envelope letter and finale signature. Leave empty to hide it.

## 5. Edit the messages

Everything important lives in `birthdayConfig` at the top of `script.js`:

| Setting | What it controls |
|--------|-------------------|
| `herName` / `yourName` | Name personalization (yourName shows on letter if set) |
| `birthdayDate` | Date line (default: October 13) |
| `birthdayMonth` / `birthdayDay` | Countdown + “It’s your day” badge |
| `personalMessage` | Typing message in the glass card |
| `secretMomentLine1` / `secretMomentLine2` | “Little secret” reveal |
| `specialThings` | “Things that make you special” cards |
| `noticeCards` | “Little Things I Notice” tap-to-reveal cards |
| `chooseResponse1` / `chooseResponse2` | Playful choose-one replies |
| `wishes` | Tap-to-collect star wishes |
| `letterMessage` | Envelope letter (`{herName}` is replaced) |
| `finalLine1` / `finalLine2` | Lines after the letter |
| `yearPromises` | Tap-through promises on the finale |
| `lastMessage` / `closingBlessing` | Finale lines |
| `secretMessage` | Appears when she holds the heart at the end |
| `easterEggTap` / `easterEggBottom` | Hidden Easter egg texts |
| `shareText` | Text used by the Share button |

Example — edit notice cards:

```js
noticeCards: [
  {
    title: "Your Eyes 👀",
    text: "Okay, I'll admit it... your eyes are genuinely attractive.",
  },
  // ...
]
```

---

## 6. Test locally

### Option A — open the file

Double-click `index.html`, or drag it into a browser.

> Note: some browsers are stricter with local audio; Netlify/local server is more reliable for music.

### Option B — local server (recommended)

With Python installed:

```bash
cd birthday-surprise
python -m http.server 5500
```

Then open: [http://localhost:5500](http://localhost:5500)

Or with Node’s `npx`:

```bash
cd birthday-surprise
npx --yes serve .
```

### What to click through

1. Cinematic intro → **Open Your Surprise**
2. Happy Birthday + countdown → next
3. Typed message → **Keep going**
4. Gift unwrap → photo → **There's more**
5. Little secret → continue
6. Tap each special card → **Continue**
7. Tap each “Little Things I Notice” card → **Keep going**
8. Choose one (smile / eyes / personality)
9. Collect star wishes → cake
10. **Make a wish** → letter envelope → finale heart → **Replay**

Also check: music mute/fade, logo heart tapped 5× (Easter egg), phone layout (DevTools device toolbar).

---

## 7. Upload to GitHub

1. Create a new GitHub repository (public or private).
2. From the project folder:

```bash
cd birthday-surprise
git init
git add .
git commit -m "Add birthday surprise website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with yours.

Do **not** commit huge private photos if the repo is public unless you’re okay with that.

---

## 8. Deploy to Netlify

### Drag & drop (fastest)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `birthday-surprise` folder onto the page
3. Copy the generated URL and send it

### From GitHub

1. Log in to [Netlify](https://www.netlify.com/)
2. **Add new site** → **Import an existing project**
3. Connect the GitHub repo
4. Build settings:
   - **Build command:** leave empty
   - **Publish directory:** `/` (or the folder that contains `index.html` if the repo root is higher up)
5. Deploy

Your site will be available at something like `https://random-name.netlify.app`. You can set a custom subdomain in Site settings.

---

## Project structure

```
birthday-surprise/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── her-photo.jpg   ← you add this
    └── music.mp3       ← optional
```

---

## Notes

- No password, login, forms, or database.
- Fully static — works on Netlify, GitHub Pages, or any static host.
- Respects `prefers-reduced-motion`.
- Mobile-first for phones around 360–430px wide; also works on desktop.

Made to feel personal — change the names, messages, photo, and music, then send the link.
