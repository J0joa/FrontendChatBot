import { useState } from "react";

function Navbar({ className }) {
  const [navSee, setNavSee] = useState(false);

  return (
    <>
      <div className="  fixed top-0 z-4 w-full h-10 flex items-center bg-[#03045E]/80 border-b-[0.3px] border-gray-300 hover:shadow-[0_0_6px_rgba(0,0,0,0.8)] md:hidden">
        <i
          onClick={() => setNavSee(!navSee)}
          className="bxr   bx-dots-horizontal-rounded-circle m-4 text-2xl text-white"
        ></i>{" "}
        <i className="bxr absolute  right-0 bx-palette m-4 text-2xl text-white"></i>
      </div>

      {navSee && (
        <div className=" relative z-5 block md:hidden ">
          <ul className="fixed z-5 text-white w-[200px] bg-[#03045E]/80 px-6 py-1 gap-5 flex justify-between flex-col items-center top-10 border-b-[0.3px] border-r-[0.3px] border-gray-300 hover:shadow-[0_0_6px_rgba(0,0,0,1)] rounded-br-2xl font-nunito parent text-[12px] font-extralight ">
            <li className="transition-all ease-in-out duration-initial hover:bg-amber-50 hover:text-[#03045E]  w-full h-10 flex items-center">
              <a className="mx-4" href="#main">Catálogo</a>
            </li>
            <li className="transition-all ease-in-out duration-initial hover:bg-amber-50 hover:text-[#03045E]  w-full h-8 flex items-center">
              <a className="mx-4" href="#novedades">Usuario</a>
            </li>
            <li className="transition-all ease-in-out duration-initial hover:bg-amber-50 hover:text-[#03045E]  w-full h-8 flex items-center">
              <a className="mx-4" href="#about">Sobre la empresa</a>
            </li>
            <li className="transition-all ease-in-out duration-initial hover:bg-amber-50 hover:text-[#03045E]  w-full h-8 flex items-center ">
              <a className="mx-4" href="#contacto">Contactos</a>
            </li>
          </ul>
        </div>
      )}

      <div className=" relative h-100  top-10 left-3 m-3 space-y-18 font-light text-[10px] md:text-[14px] lg:text-[18px]">
        <h2 className="text-[15px] md:text-[16px] lg:text-[18px] m-4">
          Categorizacion de productos{" "}
        </h2>
        <div className="gap-10 ml-0 md:ml-10 flex flex-row md:flex-none md:flex-col lg:ml-5">
          <div className="space-y-8 list-none">
            <h3 className="font-semibold text-[14px] md:text-[14px] lg:text-[18px] m-4">
              Color
            </h3>

            <ul className="space-y-4 mx-3 text-[14px] md:text-[14px] lg:text-[16px]">
              <li>Plateado</li>
              <li>Rojo</li>
              <li>Negro</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="font-semibold text-[14px] md:text-[14px] lg:text-[18px] m-4">
              Línea
            </h3>
            <ul className="space-y-4 mx-3 text-[14px] md:text-[14px] lg:text-[16px] m-4">
              <li>Sport</li>
              <li>Camioneta</li>
              <li>pickup</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
