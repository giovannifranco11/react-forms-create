import  React from 'react';

import './product-category-row.style.css';

const ProductCategoryRow = (props) => {
    return (
        <div className="product-category-row-container">
           {props.categoryName}
        </div>
    );
    
}

export default ProductCategoryRow ;