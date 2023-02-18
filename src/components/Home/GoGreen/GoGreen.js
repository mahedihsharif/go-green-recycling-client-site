import React from "react";
import Logo from "../../../images/logo.png";
import MongoImg from "../../../images/mongo.png";
import Pickup from "../../../images/pickup.png";
import Sign from "../../../images/signature-157x87.png";
import Waste from "../../../images/waste.png";
import GoGreenData from "../GoGreenData/GoGreenData";
import "./GoGreen.css";

const GoGreen = () => {
  const data = [
    {
      id: 1,
      title: "Corporate Services",
      desc: "Guaranteed that all of your universal waste management is performed safely and responsibly.",
      img: MongoImg,
    },
    {
      id: 2,
      title: "Convenient Pickup",
      desc: "We offer business pickup services to safely recycle your electronics in a safe manner.",
      img: Pickup,
    },
    {
      id: 3,
      title: "E-waste Events",
      desc: "We work with non-profits, businesses, and other organizations to host community e-waste events.",
      img: Waste,
    },
  ];
  return (
    <section className="pt-5">
      <img src={Logo} className="mx-auto mt-5 w-10" />
      <h1 className="text-center gogreen mt-3 font-monospace">
        𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔 𝕲𝖔𝕲𝖗𝖊𝖊𝖓
      </h1>
      <p className="text-center py-3 font-medium">MORE ABOUT US</p>
      <p className="text-center text-muted text-lg font-sans">
        GoGreen is a Family-owned company located in San Diego, California
        proudly serving<br></br> individuals and businesses in Southern
        California with their computers and electronics<br></br> upgrade needs,
        accepting computers and electronics waste in any conditions.
      </p>{" "}
      <br></br>
      <img src={Sign} className="mx-auto mt-5 " />
      <div className="d-flex justify-content-center  my-5 py-5">
        <div className="row gap-5">
          {data.map((pd) => (
            <GoGreenData pd={pd} id={pd.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoGreen;
