import React from "react";
import Logo from "../../../images/logo.png";
import World from "../../../images/slide02.jpg";
import "./OurMission.css";
const OurMission = () => {
  const [reduceWaste, setReduceWaste] = React.useState(false);
  const [reduceProgram, setReduceProgram] = React.useState(false);
  const [recycleMore, setRecycleMore] = React.useState(false);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={World} style={{ height: "70vh" }} />
        </div>
        <div className="col-md-6">
          <img src={Logo} className="mx-auto mt-5 w-10" />
          <h1 className="our-mission mt-5 ml-12 uppercase tracking-tight font-bold text-3xl">
            our mission
          </h1>
          <p className="ml-12 text-gray-800 uppercase text-base font-medium">
            about us
          </p>
          <br></br>
          <p className="ml-12 text-muted">
            Our mission is to keep as much plastic, electronic waste from ending
            up in local landfills as we can
          </p>
          <br></br>
          <div>
            <p
              className="reducing-design w-75 ml-12"
              onClick={() => setReduceWaste(!reduceWaste)}
            >
              🇷‌🇪‌🇩‌🇺‌🇨‌🇮‌🇳‌🇬‌ 🇼‌🇦‌🇸‌🇹‌🇪‌
            </p>
            {reduceWaste && (
              <p className="text-muted w-75 ml-12 border-2 p-5">
                Stet clita kasd gubergren, no sea takimata sanctus est lorem
                ipsum dolor sit amet ipsum dolor sit amet, consetetur elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.{" "}
              </p>
            )}
          </div>
          <div>
            <p
              className="reducing-design w-75 ml-12 mt-3"
              onClick={() => setReduceProgram(!reduceProgram)}
            >
              🇷‌🇪‌🇩‌🇺‌🇸‌🇪‌ 🇵‌🇷‌🇴‌🇬‌🇷‌🇦‌🇲‌
            </p>
            {reduceProgram && (
              <p className="text-muted w-75 ml-12 border-2 p-5">
                Stet clita kasd gubergren, no sea takimata sanctus est lorem
                ipsum dolor sit amet ipsum dolor sit amet, consetetur elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.{" "}
              </p>
            )}
          </div>
          <div>
            <p
              className="reducing-design w-75 ml-12 mt-3"
              onClick={() => setRecycleMore(!recycleMore)}
            >
              🇷‌🇪‌🇨‌🇾‌🇨‌🇱‌🇪‌ 🇲‌🇴‌🇷‌🇪‌
            </p>
            {recycleMore && (
              <p className="text-muted w-75 ml-12 border-2 p-5">
                Stet clita kasd gubergren, no sea takimata sanctus est lorem
                ipsum dolor sit amet ipsum dolor sit amet, consetetur elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
