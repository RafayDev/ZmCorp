import React from 'react'

const page = () => {
  return (
    <div className='bg-work'><div className="container mx-auto py-10">
    <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Logistics Services</h1>

    <p className="text-lg mb-6">
      ZM CORP provides comprehensive logistics services to ensure the smooth and efficient flow of materials, equipment, and resources for your defense projects. Our logistics expertise plays a crucial role in optimizing supply chains and meeting project deadlines.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h2 className="text-xl font-bold mb-4">Supply Chain Management</h2>
        <p>
          Our logistics services encompass effective supply chain management. We optimize the flow of materials, ensuring timely procurement, transportation, and delivery to meet project requirements and deadlines.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h2 className="text-xl font-bold mb-4">Global Distribution</h2>
        <p>
          ZM CORP specializes in global distribution networks. Whether it is domestic or international, our logistics team ensures that your defense equipment and resources reach their destinations efficiently and securely.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h2 className="text-xl font-bold mb-4">Customs Compliance</h2>
        <p>
          Navigating complex customs regulations is essential in defense logistics. Our team ensures strict compliance with customs requirements, facilitating the smooth movement of goods across borders and minimizing delays.
        </p>
      </div>
    </div>

    <p className="text-lg">
      Choose ZM CORP for reliable and strategic logistics services. Our commitment to precision and efficiency ensures that your defense projects benefit from seamless material flow and on-time delivery, contributing to overall project success.
    </p>
  </div></div>
  )
}

export default page