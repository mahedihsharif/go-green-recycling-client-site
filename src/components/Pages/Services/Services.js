import React from "react";
import Service from "../Service/Service";
import HardDisk from "../../../images/hard-disk.jpg";
import Battery from "../../../images/battery.jpg";
import Laptop from "../../../images/laptop.jpg";
import Frank from "../../../images/flank.jpg";
import Swine from "../../../images/swine.jpg";
import Ribeye from "../../../images/ribeya.jpg";
 import "./Services.css"
import { Link } from "react-router-dom";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import Footer from "../../Shared/Footer/Footer";

const Services = () => {
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
      desc: "Buyers are welcome to leave their best offer on available electronic products.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Laptop,
    },
    {
        id: 4,
        title: "Flank Picanha Ribeye & Pork Belly Meatbal",
        desc: "Tail sausage alcatra t-bone jerky beef spare ribs kielbasa ham doner filet mignon tenderloin tongue.",
        img: Frank,
      },
      {
        id: 5,
        title: "Swine Biltong Mignon & Leberkas",
        desc: "Sausage shank brisket jowl short ribs pancetta salami beef, strip steak meatball pastrami pork.",
        img: Swine,
      },
      {
        id: 6,
        title: "Ribeye Kielbasa & Leberkas Turducken Landjaeger",
        desc: "Turkey ball tip rump, alcatra swine bresaola jerky. Cow andouille alcatra, pork loin capicola.",
        img: Ribeye,
      },
  ];
  return (
    <>
    <NavbarComponent/>
      <section className="bg-gray-50 p-5">
        
        <h1 className="text-center font-bold gogreen mt-5 font-monospace service">
          Services
        </h1>
         
        <div className="d-flex justify-content-center py-5">
          <div className="row w-75">
            {data.map((pd) => (
              <Service pd={pd} id={pd.id} />
            ))}
          </div>
          
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Services;
