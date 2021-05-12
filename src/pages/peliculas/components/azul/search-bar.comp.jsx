import  React from 'react';

import './search-bar.style.css';

const SearchBar = () => {
    return (
        <div className="search-bar-container">
           <div className="search-input">
                <input type="text" placeholder="Buscar..."/>
           </div>
           <div>
                <input type="checkbox"/>Mostrar solo peliculas disponibles hoy
           </div>
        </div>
    );
    
}

export default SearchBar;