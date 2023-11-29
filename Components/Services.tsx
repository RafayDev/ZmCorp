import Link from "next/link";
import React from "react";

const Services = () => {
  const cardsData = [
    { content: "AGENCY SERVICES", link: "/offerServices/agencyDevelopment" },
    { content: "LOBBYING FACILITIES", link: "/offerServices/lobbying" },
    { content: "BUSINESS DEVELOPMENT", link: "/offerServices/businessDevelopment" },
    { content: "CONTRACT NEGOTITIONS", link: "/offerServices/contractNegotitions" },
    { content: "PROJECT MANAGEMENT", link: "/offerServices/projectManagement" },
    { content: "AFTER-SALE SUPPORT", link: "/offerServices/afterSale" },
    { content: "LOGISTICS", link: "/offerServices/logistics" },
  ];
  return (
    <div id="services" className="w-full h-full">
      <h1 className="text-center font font-semibold text-4xl py-16 ">
        SERVICES WE OFFER
      </h1>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-1  md:mx-6 text-xl lg:mx-48 text-center font-bold md:grid-cols-2 lg:grid-cols-2 gap-6">
          {cardsData.map((card, index) => (
            <Link
              href={card.link}
              key={index}
              className="bg-servicers p-16  cursor-pointer hover:scale-y-105 duration-500 shadow-lg"
            >
              <p className="text-white">{card.content}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
