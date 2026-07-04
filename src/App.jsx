import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import SEO from "./components/SEO";

function App() {
  return (
    <>
      <Navbar />
      <SEO
        title="Malligai Catering Services | Premium Catering in Coimbatore"
        description="Malligai Catering Services provides premium catering for weddings, birthdays, engagements, corporate events and family celebrations in Coimbatore."
        keywords="Malligai Catering Services, Catering, Wedding Catering, Birthday Catering, Corporate Catering, Coimbatore Catering"
      />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

export default App;