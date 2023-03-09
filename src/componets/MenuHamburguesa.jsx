import { useState } from "react";
import "./MenuHamburguesa.css";

function MenuHamburguesa() {
  const [Open, setOpen] = useState(false);

  return (
    <div id="inicio" className={`navBar ${Open && "open"}`}>
      <div className={`items ${Open && "open"}`}>
        <a
          href="#inicio"
          className={
            Open
              ? ""
              : "hover:bg-indigo-700 p-2 duration-100 rounded-lg shadow-lg"
          }
          onClick={() => setOpen(false)}
        >
          Inicio
        </a>
        <a
          href="#nosotros"
          className={
            Open
              ? ""
              : "hover:bg-indigo-700 p-2 duration-100 rounded-lg shadow-lg"
          }
          onClick={() => setOpen(false)}

        >
          Nosotros
        </a>
        <a
          href="#productos"
          className={
            Open
              ? ""
              : "hover:bg-indigo-700 p-2 duration-100 rounded-lg shadow-lg"
          }
          onClick={() => setOpen(false)}

        >
          {" "}
          Productos
        </a>
        <a
          href="#contacto"
          className={
            Open
              ? ""
              : "hover:bg-indigo-700 p-2 duration-100 rounded-lg shadow-lg"
          }
          onClick={() => setOpen(false)}

        >
          {" "}
          Contacto
        </a>
      </div>

      <div
        className={`toggle ${Open && "open"}`}
        onClick={() => setOpen(!Open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MenuHamburguesa;
