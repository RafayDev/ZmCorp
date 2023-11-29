import React from 'react'

const Page = () => {
  return (
    <div className='bg-work'>
         <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Lobbying Facilities</h1>
        <div className="container mx-auto py-10">
     

      <p className="text-lg mb-6">
        At ZM CORP, we take pride in offering comprehensive lobbying facilities that cater to the unique needs of our clients in the realm of defence consultancy and military-technical cooperation. Our lobbying services are designed to provide strategic support and facilitate seamless communication between our clients and key stakeholders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Strategic Advocacy</h2>
          <p>
            Our team of experts engages in strategic advocacy to represent your interests effectively. We work closely with decision-makers, government officials, and other influential entities to ensure your voice is heard at the highest levels.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Government Relations</h2>
          <p>
            Leveraging our established network, we excel in government relations, fostering positive relationships with key figures in military and political leadership. This allows us to navigate regulatory landscapes and advocate for your initiatives.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">International Collaboration</h2>
          <p>
            ZM CORP specializes in facilitating international collaboration by connecting clients with foreign manufacturers, promoting technological exchange, and fostering partnerships that contribute to the advancement of military capabilities.
          </p>
        </div>
      </div>

      <p className="text-lg">
        Our lobbying facilities extend beyond conventional boundaries, ensuring that your objectives in defence consultancy and military-technical cooperation are not only met but exceeded. Partner with ZM CORP for unparalleled lobbying expertise and a proven track record of successful project delivery.
      </p>
    </div>
    </div>
  )
}

export default Page