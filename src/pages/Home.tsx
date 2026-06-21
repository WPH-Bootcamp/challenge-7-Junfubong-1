import Hero from "../components/sections/Hero";
import TrustedBrands from "../components/sections/TrustedBrands";
import EndToEndSolutions from "../components/sections/EndToEndSolutions";
import SmartITSolutions from "../components/sections/SmartITSolutions";
import BuiltForIndustry from "../components/sections/BuiltForIndustry";
import OurProcess from "../components/sections/OurProcess";
import Portfolio from "../components/sections/Portofolio";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustedBrands />
      <EndToEndSolutions />
      <SmartITSolutions />
      <BuiltForIndustry />
      <OurProcess />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};
    

export default Home;
