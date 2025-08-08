import React, { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const AppContext = createContext();

// Proveedor del contexto
export function AppProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [colorFiltrado, setColorFiltrado] = useState(null); // ✅ nuevo estado
  const [valor, setValor] = useState([]);

  // Función para agregar un carro al carrito
  const agregarAlCarrito = (carro) => {
    setCarrito((prev) => [...prev, carro]);
  };

  // Función para cambiar el color filtrado (desde el chatbot)
  const actualizarColorFiltrado = (color) => {
    setColorFiltrado(color.toLowerCase());
  };

  return (
    <AppContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        colorFiltrado,
        actualizarColorFiltrado,
        valor, 
        setValor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Hook para usar el contexto
export const useApp = () => useContext(AppContext);
