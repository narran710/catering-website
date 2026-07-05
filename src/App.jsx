import { useEffect, useState } from "react";

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
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SEO from "./components/SEO";

import { client } from "./sanity/client";
import { homePageQuery } from "./sanity/queries";

function App() {
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCMSData() {
      try {
        const data = await client.fetch(homePageQuery);
        setCmsData(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load website.");
      } finally {
        setLoading(false);
      }
    }

    fetchCMSData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <SEO
        title="Malligai Catering Services | Premium Catering in Coimbatore"
        description="Malligai Catering Services provides premium catering for weddings, birthdays, engagements, corporate events, and family celebrations in Coimbatore."
        keywords="Malligai Catering Services, Catering, Wedding Catering, Birthday Catering, Corporate Catering, Coimbatore Catering"
      />

      <Navbar />

      <Hero />

      <About about={cmsData.about} />

      <Services />

      <Gallery gallery={cmsData.gallery} />

      <Testimonials testimonials={cmsData.testimonials} />

      <Contact
        contact={cmsData.contact}
        social={cmsData.social}
      />

      <Footer
        contact={cmsData.contact}
        social={cmsData.social}
      />

      <WhatsAppButton />

      <BackToTop />
    </>
  );
}

export default App;