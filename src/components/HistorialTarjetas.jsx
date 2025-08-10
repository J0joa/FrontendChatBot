import React, { useEffect, useState } from "react";

const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL;

export default function HistorialTarjetas() {
  const [historial, setHistorial] = useState([]);

  const obtenerHistorial = async () => {
    try {
      const res = await fetch(`${API_URL}/historial`);
      const data = await res.json();
      setHistorial(data);
    } catch (err) {
      console.error("Error al obtener historial:", err);
    }
  };

  useEffect(() => {
    obtenerHistorial(); // al cargar
    window.addEventListener("usuario_actualizado", obtenerHistorial);
    return () => {
      window.removeEventListener("usuario_actualizado", obtenerHistorial);
    };
  }, []);

  return (
    <div className="flex flex-nowrap overflow-x-auto custom-scroll">
      {historial.map((usuario, idx) => (
        <div
          key={idx}
          className="m-4 bg-sky-100 rounded-2xl"
        >
          <div className="flex-[1_0_auto] m-4 text-left bg-violet-50 rounded-2xl font-light text-[10px] md:text-[12px] lg:text-[14px]">
            <p className="w-60 m-2"><strong>Nombre:</strong> {usuario.nombre}</p>
            <p className="w-60 m-2"><strong>Edad:</strong> {usuario.edad}</p>
            <p className="w-60 m-2"><strong>Ocupación:</strong> {usuario.ocupacion}</p>
            <p className="w-60 m-2"><strong>Ingresos:</strong> ${usuario.ingresos.toLocaleString()}</p>
            <p className="w-60 m-2"><strong>Tiempo laborado:</strong> {usuario.tiempo_laborado} meses</p>
            <p className="w-60 m-2"><strong>Resultado:</strong> {usuario.resultado}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
