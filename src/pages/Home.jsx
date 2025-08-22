import { useState, useEffect } from 'react';
import { getAllCategoris } from '../api';
import { Preloader } from './Preloader';
import { CategoryList } from '../components/CatarogyList';

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategoris().then((data) => {
            setCatalog(data.categories);
        });
    }, []);

    return (
        <>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </>
    );
}

export { Home };
