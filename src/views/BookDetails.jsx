import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MostrarDetalles from '../components/MostrarDetalles';
import Carrito from "../components/Carrito";
import CarritoButton from "../components/CarritoButton";

const BookDetails = () => {
    return (
        <div className="contenedor-detalles">
            <MostrarDetalles />
            <CarritoButton />
            <Carrito />
        </div>
    )
}

export default BookDetails;