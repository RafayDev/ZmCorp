import React from 'react'

const Page = () => {
  return (
    <div className='bg-work'>
         <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Electronic Warfare Expertise</h1>
        <div className="container mx-auto py-10">
     

      <p className="text-lg mb-6">
        ZM CORP is a leader in electronic warfare expertise, providing cutting-edge solutions to dominate the electromagnetic spectrum and gain a strategic advantage on the modern battlefield. Our commitment to innovation, adaptability, and strategic partnerships ensures that our clients have access to state-of-the-art electronic warfare technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Signal Jamming Systems</h2>
          <p>
            ZM CORP specializes in the development and deployment of advanced signal jamming systems. Our electronic warfare solutions disrupt enemy communication and radar systems, providing a tactical advantage by denying crucial information and communications.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Electronic Countermeasures</h2>
          <p>
            Our expertise includes electronic countermeasure systems designed to deceive and disrupt enemy sensors and communication networks. We provide tailored solutions to protect military assets and ensure operational success in electronic warfare environments.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Cyber Warfare Solutions</h2>
          <p>
            ZM CORP delivers cutting-edge cyber warfare solutions to defend against digital threats. Our electronic warfare capabilities extend to securing information networks, safeguarding critical data, and ensuring the resilience of military cyber infrastructure.
          </p>
        </div>
      </div>

      <p className="text-lg">
        Choose ZM CORP for comprehensive electronic warfare expertise. Our commitment to staying ahead of technological advancements and emerging threats ensures that our clients have the electronic warfare capabilities required to achieve mission success.
      </p>
    </div>
    </div>
  )
}

export default Page