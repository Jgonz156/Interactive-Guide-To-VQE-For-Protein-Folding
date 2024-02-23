import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function HomePage() {
  return <h2>Home</h2>
}

function AboutPage() {
  return <h2>About</h2>
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
