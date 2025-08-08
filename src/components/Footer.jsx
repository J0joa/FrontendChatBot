function Footer({ className }) {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-6 scroll-mt-20 " id="contacto">
        <div className="max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Logo o nombre */}
          <div className = "my-10 mx-4">
            <h2 className="text-xl font-bold mb-2">MiSitioWeb</h2>
            <p className="text-sm text-gray-400">
              Inspirando y conectando ideas todos los días.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div className = "my-10 mx-4">
            <h3 className="font-semibold mb-2">Enlaces rápidos</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <a href="#inicio" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-white">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className = "my-10 mx-4 ">
            <h3 className="font-semibold mb-2">Contacto</h3>
            <ul className="text-sm text-[10px] md:text-[12px] lg:text-[14px]  text-gray-300 space-y-1">
              <li>Email: contacto@misitioweb.com</li>
              <li>Tel: +57 300 123 4567</li>
              <li>Ubicación: Bogotá, Colombia</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className = "my-10 mx-4" >
            <h3 className="font-semibold mb-2">Síguenos</h3>
            <div className="text-[17px] md:text-[18px] lg:text-[20px]  flex space-x-4 mt-2 items-center justify-center content-center">
              <a href="#" className="text-gray-300 w-8 h-8 hover:text-white">
                <img src="/img/facebook.png" alt="" />
              </a>
              <a href="#" className="text-gray-300 w-8 h-8 hover:text-white">
                <img src="/img/instagram.png" alt="" />
              </a>
              <a href="#" className="text-gray-300 w-8 h-8 hover:text-white">
                <img src="/img/linkedin.png" alt="" />
              </a>
              <a href="#" className="text-gray-300 w-8 h-8 hover:text-white">
                <img src="/img/youtube.png" alt="" />
              </a>
              <a href="#" className="text-gray-300 w-8 h-8 hover:text-white">
                <img src="/img/whatsapp.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
          &copy; 2025 MiSitioWeb. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default Footer;
