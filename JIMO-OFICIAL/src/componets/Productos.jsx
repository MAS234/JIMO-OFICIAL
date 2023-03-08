import React from "react";
import Carrusel from "./Carrusel";

function Productos() {
  return (
    <div className="w-full h-[110vh]  fondoProductos md:mt-0 mt-[30em]" id="productos" >
      <div className="w-full h-full bordes " data-aos="fade-up"
                 data-aos-duration="1000">

          <h1 className="text-center md:text-left md:ml-44  mt-20 familia colorTituto  text-6xl uppercase ">
            Productos
          </h1>

          <p className="md:ml-44 md:mr-72 colorTituto md:text-left text-center familia md:text-lg text-xl">Desde velas perfumadas y difusores de aceites esenciales hasta perfumes para el cuerpo, hay una amplia variedad de opciones disponibles para satisfacer cualquier necesidad aromática.</p>

          <Carrusel />

      </div>
    </div>
  );
}

export default Productos;
