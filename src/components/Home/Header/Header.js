import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../../../images/slide01.jpg";
import Slider2 from "../../../images/slide02.jpg";
import Slider3 from "../../../images/slide03.jpg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider1}
            alt="First slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption className="header-content">
            <h3 className="save">Electonic Recycling</h3>
            <p className="fs-4 text-muted pt-5">
              We can solve your corporate IT disposition needs quickly and
              professionally. Save Your community, Save Your planet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider2}
            alt="Second slide"
            style={{ height: "100vh" }}
          />

          <Carousel.Caption className="header-content">
            <h2 className="save">Save Your Planet</h2>
            <h3 className="save-common py-5">SAVE YOUR COMMUNITY</h3>
            <p className="fs-4 text-muted">
              We can solve your corporate IT disposition needs quickly and
              professionally. Save Your community, Save Your planet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider3}
            alt="Third slide"
            style={{ height: "100vh" }}
          />

          <Carousel.Caption className="header-content">
            <h4 className="save-common">CIRCULAR</h4>
            <h3 className="save py-5">ECONOMY</h3>
            <p className="fs-4 text-muted">
              We can solve your corporate IT disposition needs quickly and
              professionally. Save Your community, Save Your planet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Header;
