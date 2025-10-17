import React from "react";
import { I18nProvider } from "./i18n/useI18n";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
