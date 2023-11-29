import React from 'react'


const Page = () => {
  return (

    <div className='bg-work'>
       <h2 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Agency Services</h2>
       <div className="container mx-auto py-12 my-20">
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1: Defence Consultancy */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Defence Consultancy</h3>
          <p>
            Equipped with years of experience, our dedicated team of experts analyzes and assesses information to provide customized, best-fit solutions for our clients needs in the field of defence.
          </p>
        </div>

        {/* Service 2: Intermediary Services */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Intermediary Services</h3>
          <p>
            ZM CORP specializes in providing intermediary services for the development and promotion of military-technical cooperation between Pakistan Armed Forces, strategic organizations, and foreign manufacturers of advanced technology and security equipment.
          </p>
        </div>

        {/* Service 3: Project Development */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Project Development</h3>
          <p>
            We actively promote projects in the military-technical cooperation domain and provide agency services. Our proven track record and specialist experience make us a reliable partner for successful project delivery.
          </p>
        </div>

        {/* Add more services as needed */}

      </div>
    </div>
    </div>
  )
}

export default Page