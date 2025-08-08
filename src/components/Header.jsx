import { useState } from "react";

function Header({ className, movieClass, imageClass }) {

  
  
  return (
    <>
      <div className={className}>
        <div
          className="fixed z-3 top-0 left-0  w-full text-center
            text-white font-bold text-lg md:text-xl lg:text-2xl p-4 bg-[rgba(26,29,76,0.7)]
            shadow-md px-4 py-6 flex justify-between items-center text-[10px] md:text-[15px] lg:text-[20px]"
        >
          {" "}
          <img src="./img/logo.png" alt="CheBrolet" className={imageClass} />
          <ul className="px-6 py-6 gap-20 flex justify-between font-nunito font-light parent ">
            <li>
              <a href="#main" className="">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#novedades" className="">
                {" "}
                Usuario
              </a>
            </li>
            <li>
              <a href="#about" className="">
                Sobre la empresa
              </a>
            </li>
            <li>
              <a href="#contacto" className="">
                Contactos
              </a>
            </li>
          </ul>
          <i className="mx-10 text-4xl bx  bx-palette"></i>
        </div>
        
        <video
          src="./movies/car.mp4"
          className={movieClass}
          autoPlay
          muted
          playsInline
          loop
          
        />
        

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-2 text-center">
          {/* <!-- Título --> */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold ">
            CHEBROLET
          </h1>

          {/* <!-- Logo --> */}
          <img
            src="./img/logo.png"
            alt="Logo"
            className="w-30 md:w-40  lg:w-60 "
          />
        </div>
      </div>
    </>
  );
}

export default Header;
