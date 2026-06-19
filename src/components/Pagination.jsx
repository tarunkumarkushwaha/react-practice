import { useEffect, useState } from 'react';

const Pagination = () => {
    const [name, setname] = useState([]);
    const [page, setpage] = useState(1);
    const pageSize = 3;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                const namesOnly = data.map(user => user.name);
                setname(namesOnly);
            });
    }, []);
    const removeItem = (nameToRemove) => { 
        setname(prev => prev.filter(item => item !== nameToRemove));
        const newTotalPages = Math.ceil((name.length - 1) / pageSize);
        if (page > newTotalPages && page > 1) {
            setpage(newTotalPages);
        }
    };
    const startIndex = (page - 1) * pageSize;
    const currentItems = name.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(name.length / pageSize);

    return (
        <div>
            <ul>
                {currentItems.map((t, i) => (
                    <li style={{ listStyle: "none" }} key={t}> 
                        {t} <button onClick={() => removeItem(t)}>X</button>
                    </li>
                ))}
            </ul>
            
            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button 
                        key={i + 1} 
                        onClick={() => setpage(i + 1)}
                        style={{ fontWeight: page === i + 1 ? 'bold' : 'normal' }}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;