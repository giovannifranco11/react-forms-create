import  React from 'react';
import ProductTable from '../verde/product-table.comp';
import SearchBar from '../azul/search-bar.comp';

import './filterable-product-table.style.css';
import dos from './imagenes/dos.png';

const FilterableProductTable = (props) => {
    return (
        
        <div className="filterable-product-table-container">
            <img src={dos} />
            <h2><b>PELÍCULAS</b></h2>
            <div className="rojo">.</div>
            <div className="azul">.</div>
            <div className="amarillo">.</div>
            <br/>
            <SearchBar/> 
            <br/>           
            <ProductTable 
                listaPeliculas={props.listaPeliculas}
                onAddProduct={props.onAddProduct}
            /> 

            
            <b>By Giovanni Franco</b>
        </div>
    );
    
}

export default FilterableProductTable;
