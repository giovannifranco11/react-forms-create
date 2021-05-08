import  React from 'react';

import './product-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="product-row-container">

            {
                props.product.stock === 0
                ?//if true
                <span className="product-without-stock">{props.product.nombre}</span>
                ://else
                <span>{props.product.nombre}</span>
            }            
           {'------>'}  {props.product.duracion} {"minutos"}
        </div>
    );
    
}

export default ProductRow ;