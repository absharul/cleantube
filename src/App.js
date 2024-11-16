import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner title="Clear Your YouTube Homepage" imageSrc="sample-banner.jpg" altText="FocusTube Banner" />
      <HowItWorks />
      <Features />
      <Banner title="Why Choose FocusTube?" imageSrc="sample-banner-2.jpg" altText="FocusTube Banner" />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

export default App;
