import React from "react";
import Carrusel from "./Carrusel";

function Productos() {
  return (
    <div
      className="w-full md:h-[120vh] h-[130vh]  fondoProductos md:mt-0 mt-[30em]"
      id="productos"
    >
      <div
        className="w-full h-full bordes "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-center  mt-20 familia text-white   text-6xl uppercase ">
          Productos
        </h1>

        <Carrusel />

        <p className="md:mt-5 mt:10  text-white  text-center familia md:text-4xl text-2xl">
        Permíteme presentarte una amplia gama de productos aromatizantes que te encantarán.
        </p>
      </div>
    </div>
  );
}

export default Productos;
