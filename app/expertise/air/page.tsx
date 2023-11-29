import React from 'react'

const Page = () => {
  return (
    <div className='bg-work' >
        
      <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Air Defence Systems Expertise</h1>

         <div className="container mx-auto py-10">
      <p className="text-lg mb-6">
        ZM CORP stands at the forefront of air defence systems expertise, providing state-of-the-art solutions to safeguard airspace and protect against aerial threats. Our commitment to innovation, reliability, and strategic partnerships ensures that our clients have access to cutting-edge air defence technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Surface-to-Air Missile Systems</h2>
          <p>
            ZM CORP specializes in the development and integration of surface-to-air missile systems. Our advanced missile technologies are designed to intercept and neutralize aerial threats, providing a robust defence mechanism against a range of airborne targets.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Anti-Aircraft Artillery</h2>
          <p>
            Our air defence systems expertise includes anti-aircraft artillery designed for precision targeting of aerial threats. We provide powerful and adaptable anti-aircraft gun systems that enhance the capability to counter airborne threats effectively.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Radar and Surveillance Systems</h2>
          <p>
            ZM CORP delivers cutting-edge radar and surveillance systems to detect and track airborne targets. Our expertise in radar technology ensures comprehensive coverage and real-time monitoring, enhancing situational awareness for effective air defence.
          </p>
        </div>
      </div>

      <p className="text-lg">
        Choose ZM CORP for advanced air defence systems expertise. Our dedication to providing robust solutions and staying ahead of emerging threats ensures that our clients have the necessary tools to secure airspace and maintain a proactive defence posture.
      </p>
    </div>
    </div>
  )
}

export default Page