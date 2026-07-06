import { NavLink, Route, Routes } from 'react-router-dom'
import { HomePage, AboutPage } from '../../routes'

function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar" role="banner">
        <div>
          <p className="eyebrow">HelloReact</p>
          <h1>Enterprise-ready starter</h1>
        </div>
        <nav aria-label="Primary navigation">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </nav>
      </header>

      <main className="content-area">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default AppShell
