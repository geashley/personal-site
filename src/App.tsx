import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import './index.css';
import ExperiencePage from "./pages/ExperiencePage"
// import ProjectsPage from "./pages/ProjectsPage"
// import PortfolioPage from "./pages/PortfolioPage"
// import ContactPage from "./pages/ContactPage"
import ReadingCornerPage from "./pages/ReadingCornerPage"
// import WorkJourneyPage from "./pages/WorkJourneyPage"
// import ProjectHubPage from "./pages/ProjectHubPage"
// import SewingStudioPage from "./pages/SewingStudioPage"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
		<Route path="/reading-corner" element={<ReadingCornerPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work-journey" element={<WorkJourneyPage />} />
        <Route path="/project-hub" element={<ProjectHubPage />} />
        <Route path="/sewing-studio" element={<SewingStudioPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
