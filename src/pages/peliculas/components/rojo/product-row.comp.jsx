import  React from 'react';

import './product-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="product-row-container">

            {
                props.product.stock === 0
                ?//if true
                <span className="product-without-stock">{props.product.nombre} {props.product.nombreE}</span>
                ://else
                <span>{props.product.nombre} {props.product.nombreE}</span>
            }      
            {'------>'}  {props.product.duracion} {props.product.duracionE} {"minutos"}
        </div>
    );
    
}

export default ProductRow ;