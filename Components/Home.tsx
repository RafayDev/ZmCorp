import React from 'react'
import Slide from "../assets/slide.jpg";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div id="Home">
     

        <h1 className='text-center font font-semibold text-3xl my-16  ' >WELCOME</h1>
    
    <div className=' mx-16 ' >
    <div className='  mt-14 lg:mx-20   ' >
        <p className='text-center xl:mx-64   '>ZM CORP, created specifically for the provision of intermediary services in the development and promotion of military-technical cooperation between Pakistan Armed Forces, strategic organisations of Pakistan and foreign manufacturers of advanced technology and security equipment; for promoting projects in this area as well as providing agency services. Our company personnel have a proven demonstrable track record and this puts us in an advantageous position as we have specialist experience and a proven history of supply. </p>
        <br />
        <br />
        <p className='text-center  xl:mx-64   ' >
        With experienced and dedicated management and support teams, we offer both clients and principals professional services from both commercial and technical perspective, this together with a huge network of industrial contacts enables us to timely and efficiently supply a vast portfolio of defence hardware and technology around the globe.
        </p>
        <br />
        <p className='text-center xl:mx-64   '  >
        Over the years ZM CORP has grown it’s business not only in Pakistan but also overseas. There fore our services are not limited to Pakistan, acting as an exclusive agent for domestic and foreign manufacturers, we do business in various regions of the world, where we have especially strong influence on the highest level of military and political leadership of the country.
        </p>
        <br />
       
        </div>
        
        <div>
            <img className='my-16 px-10 ' src="/slide.jpg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Home