import React from "react";
import { useNavigate } from 'react-router-dom';

const Bienvenida = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("../store");
    };

    return (
            <div className="contenedor">
                <h2>Descubre la mejor tienda de libros online</h2>
                <button className="inicio-button" onClick={handleClick}>Comprar</button>
            </div>
    );
};

export default Bienvenida;