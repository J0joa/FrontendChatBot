// Archivo: src/components/Categoria.jsx
import { useParams, Link } from "react-router-dom";
import { cars } from "../data/data";
import { useApp } from "../context/AppContext";
import { useState } from "react";
import ResumenUsuario from "./UserSummary";
import UserDat from "./UserDat";

export default function Categoria() {
  const { color } = useParams();
  const productos = cars.filter((c) => c.color === color);

  const { carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad } =
    useApp();

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const total = carrito.reduce(
    (acc, item) => acc + item.valor * item.cantidad,
    0
  );

  return (
    <div className="p-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10 text-[10px] md:text-[12px] lg:text-[14px]">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <li
              key={producto.id}
              className="rounded-2xl bg-blue-200 overflow-hidden shadow flex flex-col justify-between min-h-[550px]"
            >
              <h2 className="text-2xl text-center py-2 text-blue m-4">
                {producto.linea}
              </h2>

              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={producto.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-xl text-center py-2 text-blue m-4">
                Precio: <span className="font-bold">${producto.valor}</span>
              </h2>

              <div className="flex items-center justify-center m-4">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-[10px] md:text-[12px] lg:text-[14px]">No hay productos de este color.</p>
        )}
      </ul>

      <div className="flex justify-center items-center">
        <button
          className="bg-green-600 text-black hover:bg-green-700 hover:text-white transition rounded"
          onClick={() => setMostrarCarrito(true)}
        >
          Ver Carrito 🛒 ({carrito.length})
        </button>
        <Link
          to="/"
          className="inline-block mx-10 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Volver
        </Link>
      </div>

      {mostrarCarrito && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
            {carrito.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <ul>
                {carrito.map((item) => (
                  <li
                    key={item.id}
                    className="mb-4 flex flex-col md:flex-row items-center gap-4"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-32 h-24 object-cover rounded"
                    />
                    <div>
                      <p>
                        {item.linea} - ${item.valor}
                      </p>
                      <input
                        type="number"
                        value={item.cantidad}
                        min="1"
                        className="border px-2 w-16"
                        onChange={(e) =>
                          actualizarCantidad(item.id, parseInt(e.target.value))
                        }
                      />
                      <button
                        className="text-red-600 ml-2"
                        onClick={() => eliminarDelCarrito(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 font-bold">Total: ${total}</p>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-1 rounded"
              onClick={() => setMostrarCarrito(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <ResumenUsuario />

      <div>
        <h1 className="text-2xl font-bold text-center my-4">
          Registro de Usuario
        </h1>
        <UserDat />
      </div>
    </div>
  );
}
