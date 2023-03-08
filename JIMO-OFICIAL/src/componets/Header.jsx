import React from 'react'
import MenuHamburguesa from './MenuHamburguesa'
import Perfumes from "../assets/perfumes.png"

function Header() {
  return (
    <div>
        <section className='w-full md:h-[110vh] h-[140vh] fondo'>
            <MenuHamburguesa/>

            <div className='md:flex justify-evenly mt-12'>
                <div className='m-auto w-96 md:w-1/3' data-aos="fade-up"
                 data-aos-duration="1000">
                    <img src={Perfumes} alt="perfumes" />
                </div>
                <div className="md:w-[60%] " data-aos="fade-up"
                data-aos-duration="1000">
                    <h1 className='familia text-white text-8xl mt-16 text-center mr-10 ml-10' >JIMO</h1>
                    <p className='familia text-white text-center md:text-xl text-2xl m-10  '>La fragancia de un perfume es como una nota musical que envuelve y encanta los sentidos.<br/>Bienvenidos a JIMO, nuestro oasis de aromas, donde podrás sumergirte en un mundo de sensaciones y emociones a través de las fragancias. En nuestro local, encontrarás una amplia selección de aceites esenciales, velas, inciensos y otros productos aromáticos y de limpieza de alta calidad. <br/>¡Te esperamos!</p>
                </div>
            </div>

        </section>
      
    </div>
  )
}

export default Header
