import React from "react";
import { useNavigate } from 'react-router-dom';

const BarraBuscar = ({ query, setQuery }) => {
    
    return (
        <div className="contenedor-barra">
            <input className="barra" type="text" placeholder="Buscar libro..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="buscar-button" typeof="submit">Buscar</button>
        </div>
    );
};

export default BarraBuscar;