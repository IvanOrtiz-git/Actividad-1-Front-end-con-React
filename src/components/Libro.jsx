import React from 'react';
import { Link } from 'react-router-dom';

const Libro = ({ libro }) => {
    return (
        <Link to={`/store/libro/${libro.id}`} className='libro-link'>
            <div className='libro'>
                <img className='imagen-libro' src={libro.image} alt={libro.title} />
                <h2 className='title'>{libro.title}</h2>
                <h3 className='price'>{libro.price} €</h3>
            </div>
        </Link>
    );
};

export default Libro;