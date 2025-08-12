import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Chatbot from "./components/Chatbot";
import CarList from "./components/CarList";
import UserSummary from "./components/UserSummary";
import { AppProvider } from "./context/AppContext";
import ColorFiltrado from "./components/ColorFiltrado";
import HistorialTarjetas from "./components/HistorialTarjetas";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import CategoryMain from "./components/CategoryMain";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {

  const [visible, setVisible] = useState(false);

  return (
    <AppProvider>
      <div className="p-6 min-h-screen w-full bg-gray-100">
        <Header
          className="relative z-3 bg-blue-600 h-screen text-white text-center p-4 hidden md:block text-[10px] md:text-[12px] lg:text-[14px]"
          movieClass=" absolute w-full h-full top-0 left-0 object-cover"
          imageClass="w-2  mx-10 sm:w-4 md:w-6 lg:w-20 flex  items-center text-center rounded-xl shadow"
        />
        <div className="grid grid-cols-1 md:grid-cols-[200px_605px] lg:grid-cols-[200px_1fr_250px]">
          <div className="bg-[#00B4D8]/2 p-4 rounded shadow">
            <Navbar className="text-sm md:text-base lg:text-lg h-auto " />
          </div>  

          <div className="p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="bg-white  p-4 rounded shadow flex flex-col">
                    <Main
                      titleClass="text-base my-20 text-[25px]  md:text-[30px] lg:text-3xl m-4 font-light"
                      textClass="text-sm my-20 md:text-base lg:text-lg text-mg-500/100 font-light text-[12px] md:text-[14px] lg:text-[17px]"
                      mainClass="grid gap-4  md:w-150 sm:grid-cols-2 md:grid-cols-3 items-stretch lg:w-full"
                    />
                  </div>
                }
              />
              <Route path="/categoria/:color" element={<CategoryMain />} />

              <Route
                path="/"
                element={
                  <div className="bg-white p-4 rounded shadow flex justify-center">
                    <ColorFiltrado titleClass="text-base md:text-lg lg:text-3xl font-bold m-4" />
                  </div>
                }
              />
            </Routes>
          </div>

          <div className=" hidden   lg:block bg-[#00B4D8]/2  p-4 rounded shadow">
            <Sidebar className="text-sm lg:text-base space-y-8 m-4 relative right-2 top-10 font-light text-[10px] md:text-[14px] lg:text-[18px] " />
          </div>
        </div>

        <Chatbot />
        <About
          className="mx-20 my-15 font-light"
          titleClass="font-semibold text-2xl"
        />
        <Footer />
      </div>
    </AppProvider>
  );
}
