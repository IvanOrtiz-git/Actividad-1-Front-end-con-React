import { useParams } from 'react-router-dom';
import booksList from '../data/books';

const useBook = () => {
    const { id } = useParams();
    const libro = booksList.find((l) => l.id.toString() === id);
    return libro;
};

export default useBook;