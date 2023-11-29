import React from 'react'

const Page = () => {
  return (
    <div className='bg-work'>
              <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Business Development</h1>
        <div className="container mx-auto py-10">


      <p className="text-lg mb-6">
        ZM CORP is your strategic partner in business development within the defense sector. Our dedicated team works tirelessly to identify opportunities, forge alliances, and propel your organization towards sustainable growth and success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Market Analysis</h2>
          <p>
            Gain a competitive edge with our comprehensive market analysis services. We provide insights into industry trends, competitor landscapes, and potential opportunities, empowering you to make informed business decisions.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Strategic Partnerships</h2>
          <p>
            Unlock new possibilities through strategic partnerships. ZM CORP specializes in connecting you with key players in the defense sector, fostering collaborations that enhance capabilities, innovation, and market reach.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Project Management</h2>
          <p>
            Seamlessly navigate the complexities of defense projects with our expert project management services. From inception to completion, we ensure efficient execution, on-time delivery, and optimal resource utilization.
          </p>
        </div>
      </div>

      <p className="text-lg">
        With ZM CORP as your partner in business development, expect a holistic approach that aligns with your goals and positions your organization for sustained success in the dynamic defense industry. Elevate your business potential with our proven expertise and commitment to excellence.
      </p>
    </div>
    </div>
  )
}

export default Page