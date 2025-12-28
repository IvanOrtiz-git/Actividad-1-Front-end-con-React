import React, { createContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

    const añadirCarrito = (item) => {
        setCarrito(prevItems => {
            const existe = prevItems.find(p => p.id === item.id);

            if (existe) {
                return prevItems.map(p =>
                    p.id === item.id ? { ...p, cantidad: p.cantidad + 1} : p
                );
            }
            else {
                return [...prevItems, { ...item, cantidad: 1 }];
            }
        });
        setCount(count => count + 1);
    }

    const borrarCarrito = (id) => {
        setCarrito(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        ).filter(item => item.cantidad > 0));
        setCount(count => count - 1);
    }

    const clearCarrito = () => {
        setCarrito([]);
        setCount(0);
    }
    return (
        <GlobalContext.Provider value={{ carrito, setCarrito, open, setOpen, count, añadirCarrito, borrarCarrito, clearCarrito }}>
            {children}
        </GlobalContext.Provider>
    );
};