import Chatbot from "./Chatbot";
import { useState } from "react";

function Sidebar({ className }) {
  return (
    <>
      <aside className={className}>
        <h1 className="my-10 mx-4 text-2xl relative ">Sobre la empresa</h1>

        <div className="space-y ">
          <h2 className="m-4 font-semibold text-[10px] md:text-[14px] lg:text-[18px] ">Politica</h2>
          <p className="mx-5 text-[10px] md:text-[14px] lg:text-[16px] m-4">
            Garantizamos productos confiables, duraderos y de alto desempeño.
            Aplicamos estándares internacionales en cada etapa de producción.
            Fomentamos la mejora continua en todos nuestros procesos. Escuchamos
            a nuestros clientes para ofrecer soluciones que se ajusten a sus
            necesidades. Promovemos una cultura de calidad, seguridad y
            compromiso en todo nuestro equipo.
          </p>
        </div>

        <div className="space-y ">
          <h2 className="m-4 font-semibold text-[10px] md:text-[14px] lg:text-[18px]">Mision</h2>
          <p className="mx-5 text-[10px] md:text-[14px] lg:text-[16px] m-4">
            Diseñamos, fabricamos y comercializamos vehículos innovadores,
            seguros y sostenibles. Nos comprometemos con la movilidad de
            millones de personas en todo el mundo. Nuestra pasión por la
            excelencia guía cada etapa del proceso. Trabajamos con
            responsabilidad social y ambiental. Buscamos superar las
            expectativas de nuestros clientes todos los días.
          </p>
        </div>

        <div className="space-y my-20">
          <h2 className="m-4 font-semibold text-[10px] md:text-[14px] lg:text-[16px] ">Vision</h2>
          <p className="mx-5 text-[10px] md:text-[14px] lg:text-[16px] m-4">
            Ser líderes en la transformación de la industria automotriz hacia un
            futuro eléctrico. Inspirar confianza y orgullo en cada conductor que
            elige nuestra marca. Convertirnos en referente mundial de movilidad
            inteligente y accesible. Impulsar tecnologías que conecten personas
            con eficiencia y estilo. Crear un mundo donde conducir sea sinónimo
            de sostenibilidad y emoción.
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
