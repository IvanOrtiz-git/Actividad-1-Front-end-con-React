import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from '../context/GlobalContext';

const Carrito = () =>{
    
    const { carrito, open, setOpen, borrarCarrito, count } = useContext(GlobalContext);
    const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2);
    const navigate = useNavigate();

    return (
        <div className={`carrito ${open ? "open" : ""}`}>
            <div className="contenedor-tu-carrito">
                <h2>Tu Carrito</h2>
                <button className="x-button" onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="items-carrito">
                {carrito.length === 0 && <p>Carrito vacío</p>}


                {carrito.map((item) => (
                    <div key={item.id}>
                        <p className="title">{item.title}</p>
                        <p className="price">Precio: {item.price} €</p>
                        <p className="cantidad">Cantidad: {item.cantidad}</p>
                        <button className="borrar-button" onClick={() => borrarCarrito(item.id)}>🗑</button>
                    </div>
                ))}
            </div>
            <div className="total">
                <p>Total: {total} €</p>
                <button className="pedido-button" onClick={() => {
                    navigate("/store/checkout")
                    setOpen(false)}}>Realizar pedido</button>
            </div>
        </div>
    )
}

export default Carrito;