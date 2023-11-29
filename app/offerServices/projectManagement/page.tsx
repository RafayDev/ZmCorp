import React from 'react'

const page = () => {
  return (
    <div className='bg-work'>
      
    <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Project Management</h1>
      <div className="container mx-auto py-10"></div>
    <div className="container mx-auto ">
   

      <p className="text-lg mb-6">
        ZM CORP is committed to ensuring the seamless execution and success of your defense projects through effective project management. Our experienced team employs proven methodologies to oversee every aspect of the project life cycle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Strategic Planning</h2>
          <p>
            We begin each project with strategic planning, outlining clear objectives, timelines, and resource allocations. Our meticulous planning sets the foundation for successful project execution.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Resource Management</h2>
          <p>
            Efficient resource management is crucial for project success. ZM CORP optimizes resource allocation, ensuring that your project benefits from the right skills, technology, and equipment at every stage.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Risk Mitigation</h2>
          <p>
            Our project management approach includes proactive risk mitigation. We identify potential challenges, develop contingency plans, and implement strategies to minimize risks and ensure project continuity.
          </p>
        </div>
      </div>

      <p className="text-lg">
        Choose ZM CORP for comprehensive project management services that guarantee the successful execution of your defense projects. Our commitment to excellence, combined with industry expertise, makes us the trusted partner for achieving your project goals.
      </p>
    </div>
    </div>
  )
}

export default page