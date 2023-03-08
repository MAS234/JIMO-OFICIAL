import React from "react";
import Carrusel from "./Carrusel";
import Flor from "../assets/flor.png";

function Productos() {
  return (
    <div
      className="w-full md:h-[110vh] h-[130vh]  fondoProductos md:mt-0 mt-[30em]"
      id="productos"
    >
      <div
        className="w-full h-full bordes "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="md:flex">
          <div>
            <h1 className="text-center md:text-left md:ml-20  mt-20 familia text-white   text-6xl uppercase ">
              Productos
            </h1>

            <p className="md:ml-20 md:w-96 text-white md:text-left text-center familia md:text-lg text-xl">
              Desde velas perfumadas y difusores de aceites esenciales hasta
              perfumes para el cuerpo, hay una amplia variedad de opciones
              disponibles para satisfacer cualquier necesidad aromática.
            </p>
          </div>

          <div className="flex justify-center">
            <img className="w-60 h-60 mt-5 " src={Flor} alt="flor" />
          </div>
        </div>

        <Carrusel />
      </div>
    </div>
  );
}

export default Productos;
