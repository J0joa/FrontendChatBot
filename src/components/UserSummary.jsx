// UserSummary.jsx
import { useEffect, useState } from "react";

const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL;

export default function UserSummary() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch(`${API_URL}/usuario`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsuario(data);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    // Obtener al montar
    obtenerDatos();

    // Escucha el evento "usuario_actualizado"
    window.addEventListener("usuario_actualizado", obtenerDatos);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener("usuario_actualizado", obtenerDatos);
    };
  }, []);

  if (!usuario) return <p>Cargando datos del usuario...</p>;

  return (
    <div className="p-4 bg-sky-100 mb-4 rounded  overflow-y-auto custom-scroll ">
      <div className="relative top-4 max-h-[400px]  bg-violet-300/20 rounded-2xl m-2 flex flex-col ">
        <h2 className="font-bold mb-2 m-4 text-[18px]">Resumen del Usuario</h2>
        <ul className="text-[13px]  justify-items-start m-4 font-light flex flex-col text-left">
          <li>
            <strong>Nombre:</strong> {usuario.nombre || "No registrado"}
          </li>
          <li className="m-1">
            <strong>Edad:</strong> {usuario.edad || "No registrada"}
          </li>
          <li className="m-1">
            <strong>Ocupación:</strong> {usuario.ocupacion || "No registrada"}
          </li>
          <li className="m-1">
            <strong>Ingresos:</strong> {usuario.ingresos || "No registrados"}
          </li>
          <li className="m-1">
            <strong>Tiempo laborado:</strong>{" "}
            {usuario.tiempo_laborado || "No registrado"} meses
          </li>
          <li className="m-1">
            <strong>Carros seleccionados:</strong>
          </li>
          <ul className="pl-4 list-disc m-4  bg-violet-300/20  rounded-2xl ">
            {usuario.carros_seleccionados?.length === 0 ? (
              <li className="m-2">No hay carros registrados</li>
            ) : (
              usuario.carros_seleccionados.map((carro, i) => (
                <li className="m-2" key={i}>
                  {carro.tipo} - {carro.color}
                </li>
              ))
            )}
          </ul>
        </ul>
      </div>
    </div>
  );
}
