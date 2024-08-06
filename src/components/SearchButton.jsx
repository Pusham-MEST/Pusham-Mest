import React, { useState } from 'react';  

// Sample data (replace with your actual data source)  
const data = [  
    { id: 1, name: 'Apple' },  
    { id: 2, name: 'Banana' },  
    { id: 3, name: 'Cherry' },  
    { id: 4, name: 'Date' },  
    { id: 5, name: 'Elderberry' },  
];  

const SearchFunction = () => {  
    const [searchTerm, setSearchTerm] = useState('');  
    const [results, setResults] = useState([]);  

    // Function to handle search input  
    const handleSearch = (event) => {  
        setSearchTerm(event.target.value);  

        if (event.target.value) {  
            const filteredResults = data.filter(item =>  
                item.name.toLowerCase().includes(event.target.value.toLowerCase())  
            );  
            setResults(filteredResults);  
        } else {  
            setResults([]);  
        }  
    };  

    return (  
        <div>  
            <h1>Landing Page</h1>  
            <input  
                type="text"  
                placeholder="Search..."  
                value={searchTerm}  
                onChange={handleSearch}  
            />  
            <div>  
                {results.length > 0 ? (  
                    <ul>  
                        {results.map((item) => (  
                            <li key={item.id}>{item.name}</li>  
                        ))}  
                    </ul>  
                ) : (  
                    <p>No results found</p>  
                )}  
            </div>  
        </div>  
    );  
};  

export default SearchFunction;
