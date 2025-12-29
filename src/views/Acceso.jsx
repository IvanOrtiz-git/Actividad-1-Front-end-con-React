import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Bienvenida from '../components/Bienvenida';

const Acceso = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("../store");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    
    return (
        <div className="fondo">
            <Bienvenida />
        </div>      
    );
};

export default Acceso;