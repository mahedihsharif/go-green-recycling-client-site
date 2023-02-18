import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import GoGreen from "../GoGreen/GoGreen";
import Header from "../Header/Header";
import Info from "../Info/Info";
import LatestNews from "../LatestNews/LatestNews";
import Map from "../Map/Map";
import OurMission from "../OurMission/OurMission";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Header />
      <GoGreen />
      <OurServices />
      <OurMission />
      <Testimonials />
      <LatestNews />
      <Info />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
