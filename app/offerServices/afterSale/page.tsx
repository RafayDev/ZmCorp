import React from 'react'

const Page = () => {
  return (
    <div className='bg-work'>
      
    <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">After-Sales Support</h1>
      <div className="container mx-auto py-10">

    <p className="text-lg mb-6">
      At ZM CORP, our commitment extends beyond project completion. We prioritize providing exceptional after-sales support to ensure the longevity and optimal performance of the delivered defense solutions. Our dedicated support team is ready to assist you at every stage.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h2 className="text-xl font-bold mb-4">Technical Assistance</h2>
        <p>
          Our after-sales support includes prompt technical assistance. Whether you encounter operational issues or require maintenance, our experts are available to provide guidance, troubleshooting, and solutions to keep your systems running smoothly.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h2 className="text-xl font-bold mb-4">Training Programs</h2>
        <p>
          We offer comprehensive training programs to empower your personnel with the knowledge and skills necessary for effective system utilization. Our training sessions cover maintenance, operation, and advanced functionalities.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h2 className="text-xl font-bold mb-4">Warranty Support</h2>
        <p>
          ZM CORP stands by the quality of our solutions. Our after-sales support includes warranty services to address any manufacturing defects or issues covered by the warranty terms. We strive to provide a seamless experience for our clients.
        </p>
      </div>
    </div>

    <p className="text-lg">
      Trust ZM CORP for reliable and responsive after-sales support. Our commitment to customer satisfaction ensures that you receive the assistance you need to maximize the value of your defense solutions long after the initial implementation.
    </p>
  </div></div>
  )
}

export default Page