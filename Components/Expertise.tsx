
import React from 'react'

import Link from "next/link";

const Expertise = () => {
    const cardsData = [
        
        
        {  content: 'MANNED & UNMANNED MILITARY PLATFORMS', link: "/expertise/manned" },
        {  content: 'ARMAMENTS', link: "/expertise/armaments" },
        {  content: 'AIR DEFENCE SYSTEMS', link: "/expertise/air" },
        {  content: 'ELECTRONIC WARFARE' , link: "/expertise/electronic"},
        {  content: 'COMMAND, CONTROL, COMMUNICATION, COMPUTERS & INFORMATION', link: "/expertise/commandd" },
        {  content: 'PRECISION GUIDED MUNITION & KITS', link: "/expertise/percision" },
        {  content: 'AVIONICS & OPTOELECTRONICS', link: "/expertise/avionic" },
        {  content: 'PERIMETER SECURITY EQUIPMENT', link: "/expertise/premeter" },
        {  content: 'CUSTOMISED UP-GRADATION PROJECTS' , link: "/expertise/customised"},
        {  content: 'AMMUNITION MANUFACTURING PLANTS' , link: "/expertise/ammunition"},
        {  content: 'TRAINING & SIMULATION SYSTEMS' , link: "/expertise/training" },
      ];
  return (
    <div id="Expertise" className='bg-expertise w-full h-full' >
        
            <h1 className='text-center font font-semibold text-3xl py-16 ' >AREA OF EXPERTISE</h1>
            <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-1   text-center font-bold md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Link 
          href={card.link}
          key={index} 
          className="bg-white p-24  cursor-pointer hover:scale-105 duration-300 shadow-lg">
            <p className="text-gray-700">{card.content}</p>
          </Link>
        ))}
      </div>
    </div>
 </div>
         
  )
}

export default Expertise