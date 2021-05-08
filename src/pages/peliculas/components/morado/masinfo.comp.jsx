import  React from 'react';

import './masinfo.style.css';

const MasInfo = (props) => {
    return (
        <div className="masinfo-container">
            <b>CIUDAD</b>
            {props.categoryMasInfo}
            <div className="hola"> ➤ Manizales</div>
            <div className="hola"> ➤ Bogotá</div>
            <div className="hola"> ➤ Medellín</div>
            <div className="hola"> ➤ Cali</div>
            
            
            
               
            
        </div>
        
    );
    
}

export default MasInfo ;