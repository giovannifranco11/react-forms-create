import  React, { useState } from 'react';
import ProductCategoryRow from '../turquesa/product-category-row.comp';
import ProductRow from '../rojo/product-row.comp';



import './product-table.style.css';
import MasInfo from '../morado/masinfo.comp';
import uno from '../naranja/imagenes/uno.png';
import tres from '../naranja/imagenes/tres.png';


const ProductTable = (props) => {

    
    const [category, setCategory] = useState('g1');
    const [nombre, setNombre] = useState('');
    const [nombreC, setNombreC] = useState('');
    const [duracion, setDuracion] = useState('0');
    const [duracionC, setDuracionC] = useState('0');
    const [stock, setStock] = useState('0');
    const [stockC, setStockC] = useState('0');

    const addProduct = (event) =>{
        event.preventDefault();
        const newProduct = {
            id: nombre,
            nombre: nombre,
            duracion: duracion,
            stock: Number(stock),
        }
        props.onAddProduct(newProduct, category);

        console.log('Género' +": " + category);
        console.log('Nombre' +": " + nombre);
        console.log('Duración' +": " + duracion);
        console.log('Stock' +": " + stock);
    }
    
    return (
        <div className="product-table-container">
            
            <div className="float">
            <MasInfo/>

            <div className="ciudad">

            <form>
            <b>NUEVO EVENTO</b>
                <table>
                    <tbody>
                    <tr>
                        <td>
                       <b>Tipo</b> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <select 
                            value={category}
                            onChange={(event)=>{
                                setCategory(event.target.value);
                            }}
                        >
                            <option value="Vacio"></option>
                            <option value="g5">Privado</option>
                            <option value="g5">Público</option>
                            <option value="g5">Comercial</option>                            
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Nombre del cliente</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Ingrese nombre del cliente"
                                value={nombre}
                                onChange={(event)=>{                                   
                                    setNombre(event.target.value);
                                }}
                            />
                        </td>
                                    
                    </tr>
                    <tr>
                        <td>Duración del evento</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Ingrese duración en min"
                                value={duracion}
                                onChange={(event)=>{                                   
                                    setDuracion(event.target.value);
                                }}
                                
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Disponible (1) /No Disponible (0)</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Esta disponible?"
                                value={stock}
                                onChange={(event)=>{                                   
                                    setStock(event.target.value);
                                }}
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button 
                                onClick={addProduct}
                            >
                                Agregar evento
                            </button>
                        </td>
                    </tr>
                        
                    </tbody>
                    
                                        
                </table>
            </form>                        
         </div>

            <div className="genero">GÉNEROS</div>
            <img src={uno} />
            {props.listaPeliculas.map((category, index)=>{
                
                  return (
                    <React.Fragment key={category.id}>
                        <ProductCategoryRow categoryName={category.nombre}/>
                        
                        {category.products.map((product, indexProduct)=>{
                            return (
                                <ProductRow 
                                    key={product.id} 
                                    product={product}
                                    categoryMasInfo={category.nombre}
                                />
                            );
                        })}
                    </React.Fragment>
                  );
            })}
            <br />
            <img src={tres} />
            <br /><br />
            </div>

            <div className="form-two">
            <form>
            <b>AGREGAR NUEVA CIUDAD</b>
                <table>
                    <tbody>
                    <tr>
                        <td>
                       <b>Ciudad</b> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <select 
                            value={category}
                            onChange={(event)=>{
                                setCategory(event.target.value);
                            }}
                        >
                            <option value="Vacio"></option>
                            <option value="g11">Pereira</option>
                            <option value="g21">Leticia</option>
                            <option value="g31">Barranquilla</option>
                            <option value="g41">Cartagena</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Ubicación</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Ingrese dirección"
                                value={nombreC}
                                onChange={(event)=>{                                   
                                    setNombre(event.target.value);
                                }}
                            />
                        </td>
                                    
                    </tr>
                    <tr>
                        <td>Teléfono</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Ingrese duración en min"
                                value={duracionC}
                                onChange={(event)=>{                                   
                                    setDuracionC(event.target.value);
                                }}
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Cantidad de salas</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Esta disponible?"
                                value={stockC}
                                onChange={(event)=>{                                   
                                    setStockC(event.target.value);
                                }}
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button 
                                onClick={addProduct}
                            >
                                Agregar ciudad
                            </button>
                        </td>
                    </tr>
                        
                    </tbody>
                    
                                        
                </table>
            </form>
            
        </div>

            <div className="products-form">
            <form>
            <b>NUEVA PELÍCULA</b>
                <table>
                    <tbody>
                    <tr>
                        <td>
                       <b>Género</b> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <select 
                            value={category}
                            onChange={(event)=>{
                                setCategory(event.target.value);
                            }}
                        >
                            <option value="Vacio"></option>
                            <option value="g1">Animadas</option>
                            <option value="g2">Terror</option>
                            <option value="g3">Drama</option>
                            <option value="g4">Acción</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Nombre de Película</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Ingrese nombre de película"
                                value={nombre}
                                onChange={(event)=>{                                   
                                    setNombre(event.target.value);
                                }}
                            />
                        </td>
                                    
                    </tr>
                    <tr>
                        <td>Duración en minutos</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Ingrese duración en min"
                                value={duracion}
                                onChange={(event)=>{                                   
                                    setDuracion(event.target.value);
                                }}
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Disponible (1) /No Disponible (0)</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Esta disponible?"
                                value={stock}
                                onChange={(event)=>{                                   
                                    setStock(event.target.value);
                                }}
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button 
                                onClick={addProduct}
                            >
                                Agregar pelicula
                            </button>
                        </td>
                    </tr>
                        
                    </tbody>
                    
                                        
                </table>
            </form>
        </div>
            
              
        </div>
    );    
}



export default ProductTable;