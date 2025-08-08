// Archivo: src/components/UserDat.jsx
import { useState } from "react";

export default function UserDat() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [tiempo, setTiempo] = useState("");

  const manejarRegistro = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:8000/guardar_usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          edad: parseInt(edad),
          ocupacion,
          tiempo_laborado: parseInt(tiempo),
        }),
      });
      alert("Usuario registrado correctamente");
    } catch (err) {
      console.error("Error al registrar:", err);
    }

    setNombre("");
    setEdad("");
    setOcupacion("");
    setTiempo("");
  };

  return (
    <form onSubmit={manejarRegistro} className="max-w-md mx-auto bg-gray-100 p-6 rounded shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">Registrar Usuario</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        required
      />
      <select
        value={ocupacion}
        onChange={(e) => setOcupacion(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        required
      >
        <option value="">Selecciona tu ocupación</option>
        <option value="independiente">Independiente</option>
        <option value="pensionado">Pensionado</option>
      </select>
      <input
        type="number"
        placeholder="Tiempo laborado (meses)"
        value={tiempo}
        onChange={(e) => setTiempo(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Registrar
      </button>
    </form>
  );
}
