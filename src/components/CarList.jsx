import { useApp } from "../context/AppContext";
import { useRef } from "react";

export default function CarList() {
  const contentRef = useRef(null);
  const { carrito } = useApp();

  return (
    <div className=" bg-blue-100  w-50 md:w-50 lg:w-[450px] rounded-2xl overflow-hidden">
      <h2 className="m-4 font-semibold text-[10px] md:text-[12px] lg:text-[14px]">Carrito Chatbot</h2>

      {carrito.length > 1 && (
        <div>
          <button onClick={() => (contentRef.current.scrollLeft -= 200)}>
            <i class="bxr  bx-skip-previous-circle   text-4xl md:text-5xl lg:text-6xl  "></i>{" "}
          </button>
          <button onClick={() => (contentRef.current.scrollLeft += 200)}>
            <i class="bxr  bx-skip-next-circle   text-4xl md:text-5xl lg:text-6xl  "></i>{" "}
          </button>
        </div>
      )}

      {carrito.length === 0 ? (
        <p className="text-[10px] md:text-[12px] lg:text-[14px]">No hay carros aún.</p>
      ) : (
        <ul
          ref={contentRef}
          className=" h-82  flex items-center overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth lg:w-full  rounded-1xl bg-red-100/40  "
        >
          {carrito.map((c, i) => (
            <li
              key={i}
              className="w-[200px] text-[10px] md:text-[12px] lg:text-[14px] md:w-[200px]  lg:w-[200px] flex-shrink-0 h-70  rounded-2xl"
            >
              <div className="relative flex  flex-col text-center items-center m-1   rounded-2xl border-[1px] border-gray-400 bg-sky-200">
                <p className="m-4 flex flex-col font-semibold ">
                  <span>
                    {" "}
                    {c.linea} - {c.color}{" "}
                  </span>
                  <span className="font-bold">${c.valor}</span>{" "}
                </p>

                <img
                  src={c.img}
                  alt=""
                  className=" h-[180px] w-full   object-cover rounded-2xl"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
