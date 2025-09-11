import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategoris } from '../api';
import { Preloader } from './Preloader';
import { CategoryList } from '../components/CatarogyList';
import { Search } from '../components/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalod] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalod(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            ),
            navigate(`${pathname}?search=${str}`)
        );
    };

    useEffect(() => {
        getAllCategoris().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalod(search ?
                data.categories.filter((item) =>
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())
                ) : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch}></Search>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}

export { Home };
