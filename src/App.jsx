import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Committee from "./pages/Committee";
import CallForPapers from "./pages/CallForPapers";
import ProgrammeSchedule from "./pages/ProgrammeSchedule";
import AuthorGuidelines from "./pages/AuthorGuidelines";
import ConferenceTracks from "./pages/ConferenceTracks";
import ImportantDates from "./pages/ImportantDates";
import RegistrationFees from "./pages/RegistrationFees";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./components/ui/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/schedule" element={<ProgrammeSchedule />} />
            <Route path="/guidelines" element={<AuthorGuidelines />} />
            <Route path="/tracks" element={<ConferenceTracks />} />
            <Route path="/dates" element={<ImportantDates />} />
            <Route path="/registration" element={<RegistrationFees />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
