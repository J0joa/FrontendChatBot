import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import ChatbotIcon from "./ChatbotIcon";
import Lottie from "lottie-react";


// import { cars } from "../data/cars";

//import { cars } from "../data/cars";

export default function Chatbot() {
  const [historialCreditos, setHistorialCreditos] = useState([]);

  const obtenerHistorial = async () => {
    try {
      const res = await fetch("http://localhost:8000/historial");
      const data = await res.json();
      setHistorialCreditos(data);
    } catch (err) {
      console.error("Error al obtener historial:", err);
    }
  };

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
  const [mensaje, setMensaje] = useState("");
  const [historial, setHistorial] = useState([]);
  const { agregarAlCarrito, actualizarColorFiltrado } = useApp();
  const [visible, setVisible] = useState(false)

  const enviarMensaje = async () => {
    if (mensaje.trim() === "") return;
    setHistorial([...historial, { emisor: "usuario", texto: mensaje }]);

    const colorSolicitado = mensaje.match(/rojo|negro|plateado/gi)?.[0];

    const quiereFiltrar =
      /quiero.*carros.*color/i.test(mensaje) ||
      /ver.*carros.*(rojo|negro|plateado)/i.test(mensaje) ||
      /muéstrame.*(rojos|negros|plateados)/i.test(mensaje) ||
      mensaje.toLowerCase().includes("filtrar por color");

    if (quiereFiltrar && colorSolicitado) {
      actualizarColorFiltrado(colorSolicitado.toLowerCase());
      setHistorial((h) => [
        ...h,
        {
          emisor: "bot",
          texto: `Filtrando todos los carros de color ${colorSolicitado}`,
        },
      ]);
      setMensaje("");
      return; // detenemos aquí, no llamamos al backend
    }

    try {
      const res = await fetch("http://localhost:8000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: mensaje }),
      });
      const data = await res.json();
      setHistorial((h) => [...h, { emisor: "bot", texto: data.respuesta }]);

      if (data.accion) {
        window.dispatchEvent(new Event("usuario_actualizado"));
      }

      if (
        data.accion === "CREDITO_APROBADO" ||
        data.accion === "CREDITO_RECHAZADO"
      ) {
        obtenerHistorial(); // <-- actualiza historial en frontend
      }

      if (data.accion) {
        window.dispatchEvent(new Event("usuario_actualizado"));
      }

      // 🟦 Agregar carro si el backend lo indica
      if (data.accion === "AGREGAR_CARRO") {
        try {
          const resUsuario = await fetch("http://localhost:8000/usuario");
          const usuario = await resUsuario.json();
          const ultimosCarros = usuario.carros_seleccionados;

          const ultimo = ultimosCarros[ultimosCarros.length - 1]; // último carro registrado

          if (ultimo?.tipo && ultimo?.color) {
            let tipoNormalizado = ultimo.tipo.toLowerCase();
            if (tipoNormalizado === "pickup") tipoNormalizado = "pickups";

            const carro = cars.find(
              (c) =>
                c.linea.toLowerCase() === tipoNormalizado &&
                c.color.toLowerCase() === ultimo.color.toLowerCase()
            );

            if (carro) agregarAlCarrito(carro);
          }
        } catch (e) {
          console.error("Error al traer usuario:", e);
        }
      }
    } catch (err) {
      console.error("Error:", err);
    }

    setMensaje("");
  };

  

  return (
    <div>
      <div onClick={() => setVisible(!visible)} className="fixed z-5 text-4xl bottom-4   right-4">
        <ChatbotIcon />
        
        {/* resto del código del chat */}
      </div>
      
      
      

      {visible && (
        <div className="m-4 p-4 fixed z-4 bottom-0 right-0 bg-white shadow w-80 rounded-2xl text-[10px] md:text-[12px] lg:text-[14px]">
          <div className="bg-green-950 h-10 w-full rounded-t-2xl  flex content-center justify-center">
            <h1 className="m-2 text-blue-100  font-semibold">ChatBot</h1>
            <img src="./public/img/logo" alt="" />
          </div>
          <div className="m-2 bg-green-400/10 h-60 overflow-y-auto mb-2 rounded-2xl">
            {historial.map((m, i) => (
              <p
                key={i}
                className="m-6 bg-blue-500/20 rounded-2xl flex content-center "
              >
                <strong className="mx-2">{m.emisor}:</strong> str{m.texto}
              </p>
            ))}
          </div>

          <div className="mt-2 p-2 m-4  rounded-2xl text-sm max-h-40 overflow-y-auto text-[10px] md:text-[12px] lg:text-[14px]">
            <strong className="m-2">Historial de Créditos:</strong>
            {historialCreditos.length === 0 ? (
              <p className="text-gray-500 m-2">Sin registros aún.</p>
            ) : (
              <ul className="list-disc ml-4">
                {historialCreditos.map((item, i) => (
                  <li key={i}>
                    {item.nombre || "(sin nombre)"} - {item.edad} años -{" "}
                    {item.ocupacion} - {item.ingresos} ingreso -{" "}
                    {item.tiempo_laborado} meses →{" "}
                    <span className="font-semibold">{item.resultado}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-[0.1px] m-3 rounded-2xl">
            <div className="m-4 p-4 gap-4 " >
             <input
            value={mensaje}
            type="text"
            placeholder="Escribe tu mensaje aquí..."
            onChange={(e) => setMensaje(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
            className="border-0 border-gray-100   w-full h-5 cursor-horizontal-text text-left border-none focus:outline-none"
          />

          </div>

          </div>

          

         
        </div>
      )}
    </div>
  );
}
