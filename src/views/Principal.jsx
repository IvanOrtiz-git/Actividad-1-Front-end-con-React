import React, { useEffect, useState } from "react";
import BarraBuscar from "../components/BarraBuscar";
import MostrarLibros from "../components/MostrarLibros";
import Carrito from "../components/Carrito";
import CarritoButton from "../components/CarritoButton";

const Principal = () => {

  const [query, setQuery] = useState("");

  return (
    <div className="contenedor-principal">
        <BarraBuscar query={query} setQuery={setQuery} />
        <MostrarLibros query={query} />
        <Carrito />
        <CarritoButton />
    </div>
  );
};

export default Principal;