import { useParams, Link } from "react-router-dom"; // ⬅️ useParams obtiene :color
import { createContext, useContext, useState, useEffect } from "react";

const MiCotext = createContext();

import UserDat from "./UserDat";

//import { cars } from "./data";

export const cars = [
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

export default function CategoryMain() {
  const { color } = useParams(); // obtiene el valor desde la URL

  //const filtrados = productos.filter((p) => p.color === color); // solo productos de ese color
  const filtrados = cars.filter((clr) => clr.color === color); //solo productos que tengan ese color

  //logica del carrito

  //Cargar carrito desde localStorage
  // const productos = [
  //   { id: 1, nombre: "Camisa", precio: 30000, img: "/img/r1.jpg" },
  //   { id: 2, nombre: "Pantalón", precio: 50000, img: "/img/r2.png" },
  //   { id: 3, nombre: "Zapatos", precio: 80000, img: "/img/r3.png" },
  // ];

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  // Guardar cambios del carrito en localStorage automáticamente
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  //mostrar y ocultar carrito ####################################

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito(
      carrito.map((item) => (item.id === id ? { ...item, cantidad } : item))
    );
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.valor * item.cantidad,
    0
  );

  return (
    <div className="p-8 text-[10px] md:text-[12px] lg:text-[14px]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10 scroll-mt-20 text-[10px] md:text-[12px] lg:text-[14px]">
        {filtrados.length > 0 ? (
          filtrados.map((producto) => (
            <li
              key={producto.id}
              className="rounded-2xl bg-blue-500/10 border-[0.3px] border-gray-300  overflow-hidden shadow transform transition-transform duration-300 hover:scale-101 hover:shadow-[0_0_6px_rgba(0,0,0,0.3)]"
            >
              <h2 className="text-lg font-semibold text-[10px] md:text-[14px] lg:text-[18px] m-4">
                {producto.nombre}
              </h2>

              <h2 className="text-2xl text-center font-medium  py-2 text-blue text-[14px] md:text-[16px] lg:text-[18px] m-4">
                {producto.linea}
              </h2>

              <div className="w-full h-[220px]">
                <img
                  src={producto.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl text-center font-extralight py-2 text-blue m-4  text-[14px] md:text-[16px] lg:text-[18px] ">
                Precio ${" "}
                <span className="font-extrabold">{producto.valor}</span>
              </h2>

              <div className="flex items-center">
                <button
                  className="bg-blue-500  active:bg-blue-600  text-white px-3 py-1 rounded relative flex  m-4"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  <p className="m-2">Agregar al carrito</p>
                </button>

                <i className="bxr  bxs-shopping-bag-alt animate-bounce text-4xl text-blue-500"></i>
              </div>
            </li>
          ))
        ) : (
          <p>No hay productos de este color.</p>
        )}
      </ul>
      <div className="flex  justify-center items-center ">
        <button
          className="bg-green-600 text-black  hover:bg-green-700 hover:text-amber-50 relative left-25 w-40 transition  rounded "
          onClick={() => setMostrarCarrito(true)}
        >
          <h2 className="m-2 font-extrabold text-nowrap">
            Ver Carrito 🛒 ({carrito.length})
          </h2>
        </button>

        <button className="">
          <Link
            to="/"
            className="inline-block   no-underline  mx-40 style-none bg-blue-600 gap-4 px-4  rounded hover:bg-blue-500 hover:text-amber-50 transition"
          >
            <h2 className="m-2">Volver</h2>
          </Link>
        </button>
      </div>

      {mostrarCarrito && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-center text-[10px] md:text-[12px] lg:text-[14px]">
          <div className="bg-white rounded-lg shadow-lg p-6  w-100 md:w-100 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>

            {carrito.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <ul>
                {carrito.map((item) => (
                  <li
                    key={item.id}
                    className="mb-2 flex m-5 gap-4 justify-center items-center"
                  >
                    <div className="">
                      <div className="w-full h-[200px] overflow-hidden rounded-2xl">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {item.linea} - ${item.valor} x {item.cantidad}
                      <input
                        type="number"
                        className="ml-2 border-1 px-1 w-16 m-2 rounded"
                        value={item.cantidad}
                        onChange={(e) =>
                          actualizarCantidad(item.id, parseInt(e.target.value))
                        }
                        min="1"
                      />
                      <button
                        className="ml-2 text-red-600 border-1  bg-red-300/20 active:bg-red-400/40 m-2 rounded"
                        onClick={() => eliminarDelCarrito(item.id)}
                      >
                        <p className="p-1 mx-1"> Eliminar</p>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-4 m-4 font-bold">Total: ${total}</p>

            <button
              className="mt-6 bg-red-600  text-white px-4 py-1 rounded m-4"
              onClick={() => setMostrarCarrito(false)}
            >
              <p className="m-2">Cerrar</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
