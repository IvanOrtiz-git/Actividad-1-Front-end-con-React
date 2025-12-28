import React from 'react';
import libros from '../data/books';
import Libro from './Libro';

const MostrarLibros = ({ query }) => {

    const librosFiltrados = libros.filter(libro =>
        libro.title.toLowerCase().includes(query.toLowerCase())
    );

    if (librosFiltrados === "" || !librosFiltrados){
        return (
            <div className='contenedor-libros'>
                {libros.map(libro => (
                    <Libro key={libro.id} libro={libro} />
                ))}
            </div>
        );
    } else {
        return (
            <div className='contenedor-libros'>
                {librosFiltrados.map(libro => (
                    <Libro key={libro.id} libro={libro} />
                ))}
            </div>
        );
    }
    
};

export default MostrarLibros;