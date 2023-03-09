import React from "react";
import Wapp from "../assets/wha.png";
import Mail from "../assets/mail.png";

function Contact() {
  return (
    <div className="w-full md:h-[100vh] h-[150vh] " id="contacto">
      <div className="md:flex h-full" >

        <div className="md:w-[50%] md:h-full h-[70%]" data-aos="fade-up"
                 data-aos-duration="1000">
          <h1 className="uppercase text-center md:mt-12 mt-28 familia text-indigo-900 text-4xl font-semibold">
            Comunicate con nosotros
          </h1>

          <div className=" bg-indigo-900  md:m-20 m-10 mt-36  shadow-neutral-700 shadow-xl rounded-lg p-5 ">
            <h1 className="text-center mt-10 uppercase font-semibold text-4xl text-white familia ">
              Contacto
            </h1>

            <div className="flex justify-evenly items-center mt-10">
              <div className="hover:bg-green-500 duration-200 p-2 rounded-xl cursor-pointer">
                <a href="#">
                <img
                  className="md:w-32 w-28 hover:scale-105 duration-200"
                  src={Wapp}
                  alt="wpp"
                />
                </a>
                <p className="text-center text-white uppercase">WhatsApp</p>
              </div>

              <div className="hover:bg-red-500 duration-200 p-2 rounded-xl cursor-pointer">
                <a href="#">
                <img
                  className="md:w-32 w-28 hover:scale-105 duration-200"
                  src={Mail}
                  alt="email"
                />
                </a>
                <p className="text-center text-white uppercase">Email</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[50%] md:h-[100%] h-[70%] color border md:border-none" >
          <h1 className="text-center  md:mt-10 mt-36 uppercase font-semibold text-4xl text-white familia">
            Ubicacion
          </h1>

          <div className="flex justify-center mt-10" data-aos="fade-up"
                 data-aos-duration="1000">
            <iframe
              width="500"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Av. Bartolomé Mitre 541, B1870AAF Avellaneda, Provincia de Buenos Aires&t=&z=14&ie=UTF8&iwloc=&output=embed"
              scrolling="no"
            ></iframe>
          </div>

          <p className="familia text-center text-white md:mt-5 mt-10 md:text-xl text-2xl">Av Mitre 541, “Galeria del Sol” Local 18 Avellaneda</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
