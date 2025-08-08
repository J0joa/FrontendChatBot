import { useNavigate } from "react-router-dom";
import { cars } from "../data/data";
import { useApp } from "../context/AppContext";

import HistorialTarjetas from "./HistorialTarjetas";
import UserSummary from "./UserSummary";
import CarList from "./CarList";

function Main({ titleClass, textClass, imageClass, mainClass }) {
  console.log(cars);

  const colors = [...new Set(cars.map((car) => car.color))];

  const colorUnico = cars.filter((car) => car.color === "rojo");

  const navigate = useNavigate();

  const { valor } = useApp();

  return (
    <>
      <section className="flex flex-col items-center text-center m-4 gap-4">
        {
          <div className="scroll-mt-20" id="main">
            <h2 className={titleClass}>Sección de productos</h2>
            <h3 className="text-3xl font-sans m-15">Catálogo</h3>
            <div className={mainClass}>
              {colors.map((ColorOp) => {
                const carThisColor = cars.find((car) => car.color === ColorOp);

                return (
                  <div
                    key={ColorOp}
                    onClick={() => navigate(`/categoria/${ColorOp}`)}
                    className="flex flex-col bg-blue-50 p-4 w-full h-full rounded transform transition-transform duration-300 hover:scale-101 hover:shadow-lg hover:shadow-gray-40 my-4 text-[10px] md:text-[12px] lg:text-[14px] "
                  >
                    <h3 className=" font-serif font-semibold mb-2 text-[10px] md:text-[14px] lg:text-[18px] m-4">
                       {ColorOp}
                    </h3>

                    {/* Imagen con aspecto fijo */}
                    <div className="w-full aspect-[4/3] mb-4">
                      <img
                        className="w-full h-full object-cover rounded"
                        src={carThisColor.img}
                        alt={`Auto ${ColorOp}`}
                      />
                    </div>

                    {/* Contenido textual */}
                    <div className="flex-1 flex flex-col justify-between text-[10px] md:text-[14px] lg:text-[18px] m-4">
                      <ul className="text-center space-y-2">
                        <li className="text-[10px] md:text-[14px] lg:text-[18px]   font-light">CHEBROLET</li>
                        <li className="text-[10px] md:text-[14px] lg:text-[18px]   font-extralight">MODELO 2030</li>
                        <li className="text-[10px] md:text-[14px] lg:text-[18px]   font-semibold">
                          Desde:{" "}
                          <span className=" text-[17px] md:text-[18px] lg:text-[20px] text-black font-black">
                            $50.000.000
                          </span>
                          <i className="bx bxs-shopping-bag-alt animate-bounce text-3xl text-blue-500 ml-2"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className={textClass}>
              {" "}
              "Creamos vehículos que inspiran confianza, conectan personas y
              transforman caminos. Impulsamos la innovación con responsabilidad,
              pasión y compromiso con el planeta. Cada diseño nace del deseo de
              brindar seguridad, confort y emoción al conducir. Somos más que
              una marca: somos el motor que mueve tu vida hacia el futuro."
            </p>
          </div>
        }

        <div className="scroll-mt-20 min-h-screen text-[17px] md:text-[18px] lg:text-[20px] " id="novedades">
          <h2 className={titleClass}>Información del Usuario</h2>

          <div className="">
            <div className=" gap-4 m-4 grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[22%_76%]">
              <div className="w-full flex justify-center cus ">
                <p>
                  <UserSummary />
                </p>
              </div>

              <div className="w-full flex justify-center">
                <CarList />
              </div>

              <div className=""></div>

              <div className=" md:w-60 lg:w-110 bg-green-800/10 rounded-xl">
                <h2 className=" font-semibold text-[18px] m-4">
                  Datos de Usario
                </h2>
                <HistorialTarjetas />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default Main;
