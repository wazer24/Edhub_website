import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import GalleryPage from './pages/GalleryPage';
import AlumniPage from './pages/AlumniPage';
import ProgrammesPage from './pages/ProgrammesPage';
import FacultyPage from './pages/FacultyPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
