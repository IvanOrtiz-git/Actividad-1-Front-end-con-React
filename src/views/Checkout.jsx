import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from '../context/GlobalContext';

const Checkout = () => {
    const { carrito, clearCarrito, borrarCarrito } = useContext(GlobalContext);
    const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2);
    const navigate = useNavigate();

    return (
        <div className="contenedor-checkout">
            <div>
                {carrito.length === 0 && <p>Carrito vacío</p>}
    
    
                {carrito.map((item) => (
                    <div className="item-checkout" key={item.id}>
                        <p className="title">{item.title}</p>
                        <p className="price">Precio: {item.price} €</p>
                        <p className="cantidad">Cantidad: {item.cantidad}</p>
                        <button className="borrar-checkout" onClick={() => borrarCarrito(item.id)}>🗑</button>
                    </div>
                ))}
            </div>
            <div className="total-checkout">
                <p>Total: {total} €</p>
                <button className="pagar-button" onClick={() => {
                    if (carrito.length !== 0) {
                        alert(`Se ha realizado el pedido.`);
                        clearCarrito();
                        navigate("/store");
                    } else {
                        alert(`El carrito está vacío.`);
                        navigate("/store");
                    }
                    
                }}>Pagar</button>
            </div>
        </div>
    );
};

export default Checkout;