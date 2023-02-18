import React from "react";
import { Link } from "react-router-dom";
import Battery from "../../../images/battery.jpg";
import HardDisk from "../../../images/hard-disk.jpg";
import Laptop from "../../../images/laptop.jpg";
import Logo from "../../../images/logo.png";
import OurService from "../OurService/OurService";
import "./OurServices.css";

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Hard Drive, Flash Drive & SSD Destruction",
      desc: "Clients can simply schedule their hard drive destruction online and through our website.Hard Drive, Flash Drive & SSD",
      img: HardDisk,
    },
    {
      id: 2,
      title: "Electronic Waste Collection & Recycling",
      desc: "Users quickly replace their electronic devices with newer, faster & stronger gadgets on the market.",
      img: Battery,
    },
    {
      id: 3,
      title: "Electronics & Computer Resale",
      desc: "Buyers are welcome to leave their best offer on available electronic products.Lorem Ipsum is simply dummy text of the printing.",
      img: Laptop,
    },
  ];
  return (
    <>
      <section className="bg-gray-50 py-5">
        <img src={Logo} className="mx-auto mt-5 w-10" />
        <h1 className="text-center font-bold gogreen mt-3 py-3 ">
          Our Services
        </h1>
        <p className="text-center text-muted text-base">WHAT WE DO</p>
        <div className="d-flex justify-content-center py-5">
          <div className="row gap-3">
            {data.map((pd) => (
              <OurService pd={pd} id={pd.id} />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/services">
            <button className="text-center service-design w-15 uppercase tracking-wide text-sm">
              all<span className="ml-2"> services</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurServices;
