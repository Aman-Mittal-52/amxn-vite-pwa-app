# 📱 amxn-pwa-demo

A minimal Progressive Web App (PWA) demo by **Aman Mittal** — showcasing how to build installable web apps with **Vite + React**.

🔗 **Live:** [amxn.in](https://amxn.in)

---

## ✨ Features

- **📲 Installable** — Add to your home screen like a native app, no app store needed
- **⚡ Fast & Lightweight** — Built with Vite + React for blazing-fast performance
- **🔄 Offline Ready** — Works even without an internet connection using service workers
- **🔔 Push Notifications** — Stay updated with real-time alerts
- **🎨 Responsive** — Looks great on any device or screen size
- **🔒 Secure** — Served over HTTPS for maximum security

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 7](https://vitejs.dev) | Build tool & dev server |
| [vite-plugin-pwa](https://vite-pwa-org.netlify.app) | PWA integration (manifest, service worker) |
| [Workbox](https://developer.chrome.com/docs/workbox) | Offline caching strategies |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Aman-Mittal-52/amxn-vite-pwa-app.git
cd amxn-vite-pwa-app

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📲 How to Install the PWA

1. **Open in Browser** — Visit the app in Chrome, Edge, or any supported browser
2. **Click "Install"** — Tap the install button on the page or use the browser's install prompt in the address bar
3. **Enjoy!** — The app is now on your home screen — use it anytime, even offline

---

## 📁 Project Structure

```
amxn-vite-pwa-app/
├── public/
│   └── logo/
│       └── image.png          # App icon & favicon
├── src/
│   ├── App.jsx                # Main app component
│   ├── App.css                # App styles
│   ├── PWABadge.jsx           # PWA update badge component
│   ├── PWABadge.css           # PWA badge styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── vite.config.js             # Vite + PWA config
├── pwa-assets.config.js       # PWA assets generation config
└── package.json
```

---

## ⚙️ PWA Configuration

The PWA is configured in `vite.config.js` using `vite-plugin-pwa`:

- **Auto-update** service worker registration
- **Workbox** for caching all JS, CSS, HTML, SVG, PNG, and ICO files
- **Web App Manifest** with app name, icons, and theme color
- **Dev mode** PWA support enabled for local testing

---

## 👤 About

Built by **[Aman Mittal](https://amxn.in)** as a demo to learn and showcase how to build modern PWAs with Vite and React.

---

## 📄 License

This project is open source and available for learning purposes.
