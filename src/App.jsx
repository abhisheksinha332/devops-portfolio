import React, {useState, useEffect} from 'react'
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import ScrollProgress from './components/ScrollProgress';
import Certifications from './sections/Certifications';
import Appreciations from './sections/Appreciations';
import ContactPage from './sections/ContactPage';
import Footer from './sections/Footer';
import AlertDialogSlide from './components/AlertDialogSlide';


import { AnimatePresence } from "framer-motion";
import CICDPreloader from "./components/CICDPreloader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);


  return (

    <AnimatePresence>
      {loading ? <CICDPreloader /> :  <div>
         <Background />
         <Navbar />
         <ScrollProgress />
         <Hero />
         <About />
         <Skills />
         <Experience />
         <Projects />
         <Certifications />
         <Appreciations />
         <ContactPage />
         <Footer />
         <AlertDialogSlide />
      </div>}
    </AnimatePresence>
  )
}

export default App
