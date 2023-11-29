import React from 'react'

const Page = () => {
  return (
    <div className='bg-work'>
         <h1 className="text-4xl font-bold my-24 text-center bg-black text-white p-14 mb-8">Armaments Expertise</h1>
        <div className="container mx-auto py-10">
     

      <p className="text-lg mb-6">
        ZM CORP is a leader in armaments expertise, providing cutting-edge solutions in the development, production, and integration of advanced weaponry. Our commitment to precision, innovation, and strategic partnerships ensures that our clients have access to state-of-the-art armaments for diverse defense applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Firearms and Small Arms</h2>
          <p>
            ZM CORP specializes in the development and production of firearms and small arms for military and law enforcement applications. Our arsenal includes a range of high-performance weapons designed for accuracy, reliability, and adaptability in various operational scenarios.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Missile Systems</h2>
          <p>
            Our armaments expertise extends to the development of advanced missile systems. From tactical missiles to guided missile systems, we offer cutting-edge solutions designed for precision targeting and strategic impact, enhancing the capabilities of defense forces.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Artillery and Heavy Weapons</h2>
          <p>
            ZM CORP delivers expertise in the design and production of artillery and heavy weapons. Our armaments portfolio includes powerful and versatile artillery systems, heavy machine guns, and anti-aircraft weapons, meeting the demands of modern warfare.
          </p>
        </div>
      </div>

      <p className="text-lg">
        Choose ZM CORP for comprehensive armaments expertise. Our commitment to technological advancement and stringent quality standards ensures that our clients receive state-of-the-art armaments to meet the challenges of contemporary defense environments.
      </p>
    </div>
    </div>
  )
}

export default Page