import React from "react";
import "./Info.css";
const Info = () => {
  return (
    <>
      <div className="d-flex justify-content-center design-pattern ">
        <div className="row w-75 my-2 py-2">
          <div className="col-md-4">
            <div className="row my-4 py-4">
              <div className="col-md-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-white mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  />
                </svg>
              </div>
              <div className="col-md-11">
                <h1 className="text-white fs-5">01956742573</h1>
                <address className="text-white">140 HORIZON CIRCLE, SAN DIEGO, CA</address>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row my-4 py-4">
              <div className="col-md-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7  text-white mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="col-md-11">
                <h1 className="text-white fs-5">Open Hours</h1>
                <time className="text-white text-center">WEEKDAYS 8.00-18.00, SAT: CLOSED</time>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="my-4 py-4">
              <input
                class="shadow fst-italic appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
