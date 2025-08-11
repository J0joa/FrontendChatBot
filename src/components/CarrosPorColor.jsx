import React from "react";
import { useApp } from "../context/AppContext";
//import { cars } from "../data/cars";

export default function CarrosPorColor() {
  const { colorFiltrado } = useApp(); // 👈 obtenemos el color desde el contexto

  const cars = [
  { id: 1, valor: 200000000, color: "rojo", linea: "sport", img: "/img/r1.jpg" },
  { id: 2, valor: 50000000, color: "rojo", linea: "pickups", img: "/img/r2.png" },
  { id: 3, valor: 100000000, color: "rojo", linea: "camioneta", img: "/img/r3.png" },
  { id: 4, valor: 500000000, color: "plateado", linea: "sport", img: "/img/p1.png" },
  { id: 5, valor: 30000000, color: "plateado", linea: "pickups", img: "/img/p2.png" },
  { id: 6, valor: 70000000, color: "plateado", linea: "camioneta", img: "/img/p3.png" },
  { id: 7, valor: 600000000, color: "negro", linea: "sport", img: "/img/b1.png" },
  { id: 8, valor: 30000000, color: "negro", linea: "pickups", img: "/img/b2.png" },
  { id: 9, valor: 45000000, color: "negro", linea: "camioneta", img: "/img/b3.png" }
  ];

  // Filtrar los carros por el color que viene del chatbot
  const carrosFiltrados = colorFiltrado
    ? cars.filter((carro) => carro.color.toLowerCase() === colorFiltrado)
    : [];

  return (
    <div className="p-4 bg-blue-100 rounded mt-4">
      <h2 className="text-lg font-semibold mb-2 text-[10px] md:text-[12px] lg:text-[14px]">Carros del color: {colorFiltrado || "ninguno"}</h2>
      {carrosFiltrados.length > 0 ? (
        <ul>
          {carrosFiltrados.map((carro) => (
            <li key={carro.id} className="mb-2 flex items-center gap-3">
              <img src={carro.img} alt={carro.linea} className="w-20 h-12 object-cover" />
              <span>
                <strong>{carro.linea}</strong> - {carro.color} - ${carro.valor.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-[10px] md:text-[12px] lg:text-[14px]" >No hay carros disponibles del color seleccionado.</p>
      )}
    </div>
  );
}
