import { useState, useEffect } from 'react'
import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [canInstall, setCanInstall] = useState(false)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    // Remove existing favicon
    const existingIcon = document.querySelector("link[rel~='icon']")
    if (existingIcon) existingIcon.remove()

    // Set new favicon after 4 seconds
    const timer = setTimeout(() => {
      const link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/png'
      link.href = '/logo/image.png'
      document.head.appendChild(link)
    }, 4000)

    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setCanInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    window.addEventListener('appinstalled', () => {
      setInstalled(true)
      setCanInstall(false)
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setInstalled(true)
    }
    setDeferredPrompt(null)
    setCanInstall(false)
  }

  const features = [
    { icon: '📱', title: 'Installable', desc: 'Add to your home screen like a native app' },
    { icon: '⚡', title: 'Fast & Lightweight', desc: 'Built with Vite + React for blazing speed' },
    { icon: '🔄', title: 'Offline Ready', desc: 'Works even without an internet connection' },
    { icon: '🔔', title: 'Push Notifications', desc: 'Stay updated with real-time alerts' },
    { icon: '🎨', title: 'Responsive', desc: 'Looks great on any device or screen size' },
    { icon: '🔒', title: 'Secure', desc: 'Served over HTTPS for maximum security' },
  ]

  return (
    <div className="app-wrapper">
      {/* GitHub Button */}
      <a
        href="https://github.com/Aman-Mittal-52/amxn-vite-pwa-app"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
        aria-label="View on GitHub"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.005-.404c1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.838 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        GitHub
      </a>

      {/* Hero / About Section */}
      <header className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="avatar-ring">
            <img src="/logo/image.png" alt="Aman Mittal" className="avatar" />
          </div>
          <h1 className="hero-title">Aman Mittal</h1>
          <p className="hero-subtitle">Developer · Writer · Open Source Enthusiast</p>
          <p className="hero-bio">
            Passionate about building modern web experiences. This app demonstrates
            how to create a <strong>Progressive Web App (PWA)</strong> using
            Vite + React — installable, offline-ready, and lightning fast.
          </p>

          <div className="hero-actions">
            {canInstall && (
              <button className="btn btn-primary pulse" onClick={handleInstallClick}>
                <span className="btn-icon">📲</span>
                Install This App
              </button>
            )}
            {installed && (
              <div className="installed-badge">
                <span>✅</span> App Installed Successfully!
              </div>
            )}
            <a
              href="https://amxn.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Visit amxn.in →
            </a>
          </div>
        </div>
      </header>

      {/* What is a PWA Section */}
      <section className="section pwa-section">
        <h2 className="section-title">What Makes This a PWA?</h2>
        <p className="section-desc">
          Progressive Web Apps combine the best of web and native apps.
          You can <strong>install this app</strong> directly from your browser — no app store needed!
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Install */}
      <section className="section install-section">
        <h2 className="section-title">How to Install</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <h4>Open in Browser</h4>
              <p>Visit this page in Chrome, Edge, or any supported browser.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div>
              <h4>Click "Install"</h4>
              <p>Tap the install button above or use the browser's install prompt in the address bar.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div>
              <h4>Enjoy!</h4>
              <p>The app is now on your home screen — use it anytime, even offline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">PWA Features</a></li>
              <li><a href="#install">How to Install</a></li>
              <li><a href="https://amxn.in" target="_blank" rel="noopener noreferrer">amxn.in</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Page Features</h4>
            <ul>
              <li>📱 Installable PWA</li>
              <li>⚡ Vite + React</li>
              <li>🔄 Offline Support</li>
              <li>🎨 Responsive Design</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About This App</h4>
            <p className="footer-about">
              A demo PWA by <a href="https://amxn.in" target="_blank" rel="noopener noreferrer">Aman Mittal</a> showcasing
              how to build installable web apps with modern tools.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aman Mittal · <a href="https://amxn.in" target="_blank" rel="noopener noreferrer">amxn.in</a></p>
        </div>
      </footer>

      <PWABadge />
    </div>
  )
}

export default App
