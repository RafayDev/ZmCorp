'use client';
import React, { useState } from "react";

const Wrok = () => {
  const email = " info@zmcorp.com.pk";

  //Toggle Tabs with React-->
  const [toggle, setToggle] = useState(1);

  const updateToggle = (value: any) => {
    setToggle(value);
  };
  return (
    <div id="Wrok">
      <div className="w-full bg-work mt-24 ">
        <div>
          <h3 className="text-center font  font-bold text-4xl py-16 ">
            WORK WITH US
          </h3>
          <div>
            <ul className="flex flex-row space-x-4 cursor-pointer items-center justify-center">
              <li
                className="text-work-grey hover:text-servicers font-bold text-2xl"
                onClick={() => {
                  console.log("Updating toggle to 1");
                  updateToggle(1);
                }}
              >
                PARTNERS
              </li>
              <li
                className="text-work-grey hover:text-servicers font-bold text-2xl"
                onClick={() => {
                  console.log("Updating toggle to 1");
                  updateToggle(2);
                }}
              >
                WORK FOR US
              </li>
            </ul>
            <div className={toggle == 1 ? "block" : "hidden"}>
              <div className=" mx-16 mt-14 lg:mx-20  " id="1">
                <p className="text-center xl:mx-64   ">
                  ZM CORP has a network of contacts spanning the entire globe
                  and has been strengthened throughout the years. Currently we
                  have partners in Russia, former Soviet Republics, Europe,
                  Middle East, UK, South America, Africa and Southeast Asia, but
                  we are always looking to expand our reach.{" "}
                </p>
                <br />
                <br />
                <p className="text-center  xl:mx-64   ">
                  If you are interested in working with us or are a manufacturer
                  looking to expand your business please send us the profile of
                  your company and contact details at:
                </p>
                <br />
                <p className="text-center xl:mx-64   ">info@zmcorp.com.pk</p>
                <br />
              </div>
            </div>

            <div className={toggle == 2 ? "block" : "hidden"}>
              <div className=" mx-16 mt-14 lg:mx-20   " id="2">
                <p className="text-center xl:mx-64   ">
                  We are always looking to expand our team of highly skilled and
                  dedicated professionals.{" "}
                </p>
                <br />
                <br />
                <p className="text-center  xl:mx-64   ">
                  If you are interested in working for us. Please upload your CV
                  below and one of our recruiters will get back to you as soon
                  as possible.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* <div className="bg-black w-full h-full  p-20 ">
        <div className=" bg-black  ">
          <div className="bg-black  text-gray-400 text-center p-6">
            <strong className="">Telephone: </strong>+92 51 844 0961 <br />
            <strong>Fax: </strong> +92 51 831 1507 <br />
            <strong>
              Email:
              <a
                href={`mailto:${email}`}
                className="text-servicers hover:underline"
              >
                {" "}
                {email}
              </a>{" "}
            </strong>{" "}
            <br />
          </div>
        </div>
        <footer className="bg-black text-white py-4 text-center">
          <div className="container mx-auto">
            <p className="text-sm">&copy; 2016 ZM CORP. All Rights Reserved.</p>
          </div>
        </footer>
      </div> */}

    </div>
  );
};

export default Wrok;
