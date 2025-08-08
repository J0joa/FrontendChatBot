import { useApp } from "../context/AppContext";

import { useEffect } from "react";








export default function ColorFiltrado( {titleClass}) {

  

  const cars = [
    {
      id: 1,
      valor: 200000000,
      color: "rojo",
      linea: "sport",
      img: "/img/r1.jpg",
    },
    {
      id: 2,
      valor: 50000000,
      color: "rojo",
      linea: "pickups",
      img: "/img/r2.png",
    },
    {
      id: 3,
      valor: 100000000,
      color: "rojo",
      linea: "camioneta",
      img: "/img/r3.png",
    },
    {
      id: 4,
      valor: 500000000,
      color: "plateado",
      linea: "sport",
      img: "/img/p1.png",
    },
    {
      id: 5,
      valor: 30000000,
      color: "plateado",
      linea: "pickups",
      img: "/img/p2.png",
    },
    {
      id: 6,
      valor: 70000000,
      color: "plateado",
      linea: "camioneta",
      img: "/img/p3.png",
    },
    {
      id: 7,
      valor: 600000000,
      color: "negro",
      linea: "sport",
      img: "/img/b1.png",
    },
    {
      id: 8,
      valor: 30000000,
      color: "negro",
      linea: "pickups",
      img: "/img/b2.png",
    },
    {
      id: 9,
      valor: 45000000,
      color: "negro",
      linea: "camioneta",
      img: "/img/b3.png",
    },
  ];

  //exportar globalmente con useState y context (useContext, createContext)




  




  const { colorFiltrado } = useApp();

  const filtrados = colorFiltrado
    ? cars.filter((c) => c.color.toLowerCase() === colorFiltrado.toLowerCase())
    : [];

  const {setValor} = useApp();

  useEffect(() => {
    if(filtrados.length > 0 ){
      setValor(filtrados)
    }
  }, [])

  

  return (
    <div className="p-4 bg-green-50 mt-4 text-[10px] md:text-[12px] lg:text-[14px]">
      <h2>Carros filtrados por color: {colorFiltrado || "ninguno"}</h2>
      {filtrados.length === 0 ? (
        <p>No hay carros para este color.</p>
      ) : (
        <ul>
          {filtrados.map((c) => (
            <li key={c.id}>
              <div className="w-full h-[50px]">
                <img
                  src={c.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              {c.linea} - {c.color} - ${c.valor}
            </li>
          ))}
        </ul>
      )}

      <div className="scroll-mt-20 min-h-screen text-[10px] md:text-[12px] lg:text-[14px]" id="novedades">
        <h2 className={titleClass}>Novedades</h2>
        /*buscador */
        <div>
          <form action="/buscar" method="GET">
            <input type="search" name="q" placeholder="Buscar..." />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <div className="">
          <div className=" gap-4 m-4 grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[22%_76%]">
            <div className="w-full flex justify-center ">
               {/* Todos los registros anteriores */}
              
            </div>

            <div className=" flex justify-center">
              
            </div>
          </div>
          <div className="m-4 gap-4 grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[70%_28%]">
            <div className="w-full flex justify-center">
              
            </div>

            <div className=" w-full">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                fugit voluptatibus ipsa ducimus itaque at deserunt magni ad,
                aliquam optio error qui tenetur saepe ipsum numquam voluptatum
                ea impedit accusantium.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Servicios */}
      <div className="scroll-mt-20 " id="servicios">
        <h2 className={titleClass}> Servicios </h2>
        <div className=" gap-4  m-4 h-screen grid md:grid-col-1 lg:grid-cols-[34%_64.5%] ">
          <div className="w-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae pariatur tempora voluptatum qui, beatae esse est nobis,
              debitis ullam in corrupti voluptates harum iste tempore vitae.
              Aspernatur, ullam officia?
            </p>
            <div className="bg-blue-300 p-4  w-full h-auto rounded">
              <img src="./img/Red.jpg" alt="" />
            </div>
          </div>
          <div className="gap-4  m-4  grid md:grid-col-2 lg:grid-rows-[34%_64.5%] ">
            <div className="w-full">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                itaque explicabo natus repudiandae voluptate cum nostrum
                aspernatur mollitia culpa nisi aperiam, iusto fuga, ullam
                asperiores autem repellat eius accusamus ducimus.
              </p>
            </div>
          </div>        
        </div>
      </div>

      
    </div>
  );
}
