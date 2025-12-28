import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useBook from '../hooks/useBook';
import { GlobalContext } from '../context/GlobalContext';

const MostrarDetalles = () => {
    const libro = useBook();
    const { añadirCarrito } = useContext(GlobalContext);

    if (!libro) {
        return <p>Libro no encontrado</p>;
    }
    
    return (
        <div className='contenedor-detalles-libro'>
            <img src={libro.image} alt={libro.title} />
            <div>
                <h2>{libro.title}</h2>
                <p>Autor: {libro.author}</p>
                <p>Género: {libro.genre}</p>
                <p>Año: {libro.year}</p>
                <p>Rating: {libro.rating}</p>
                <p>Precio: {libro.price} €</p>
                <p>Sinopsis: {libro.synopsis}</p>
                <button className='agregar-button' onClick={() => añadirCarrito(libro)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default MostrarDetalles;