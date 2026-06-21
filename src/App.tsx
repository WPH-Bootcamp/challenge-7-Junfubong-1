/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

/* import React from "react"; */
import Navbar from "./components/layout/Navbar";
/* import Footer from "./components/layout/Footer"; */
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
