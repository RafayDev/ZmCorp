import React from 'react'

const Footer = () => {
  const email = " info@zmcorp.com.pk";
  return (
    <div className="min-h-full mt-10 flex flex-col">
      <div className="flex-grow bg-black p-20">
        <div className="bg-black text-gray-400 text-center">
          <strong>Telephone: </strong>+92 51 844 0961 <br />
          <strong>Fax: </strong> +92 51 831 1507 <br />
          <strong>
            Email:
            <a href={`mailto:${email}`} className="text-servicers hover:underline">
              {email}
            </a>
          </strong>{" "}
          <br />
        </div>
        {/* Your content goes here */}
        <div className="text-white mt-10">
          {/* Add your content here */}
        </div>
      </div>
      <footer className="bg-black text-white py-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm">&copy; 2016 ZM CORP. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer