import  React, { useState } from 'react'; 
import FilterableProductTable from './components/naranja/filterable-produts-table.comp';


const PeliculasPage = () => {

    let listaPeliculas = [
            {
                id:"g1",
                nombre:'  🔴 Animadas',
                    products:[
                        {
                            id:"g1p1",
                            nombre:"Mi villano favorito",
                            duracion:"135",
                            stock:5,
                        },                        
                        {
                            id:"g1p2",
                            nombre:"Shrek",
                            duracion:"99",
                            stock:15,
                        },
                        {
                            id:"g1p3",
                            nombre:"Los pitufos",
                            duracion:"105",
                            stock:0,
                        }
                    ]
            },
            {
                id:"g2",
                nombre:' 🔴 Terror',
                products:[
                        {
                            id:"g2p1",
                            nombre:"La bruja",
                            duracion:"158",
                            stock:20,
                        },
                        {
                            id:"g2p2",
                            nombre:"Anabelle",
                            duracion:"145",
                            stock:0,
                        },
                        {
                            id:"g2p3",
                            nombre:"El conjuro",
                            duracion:"195",
                            stock:10,
                        }
                    ]
                },

                {
                    id:"g3",
                    nombre:' 🔴 Drama',
                        products:[
                            {
                                id:"g3p1",
                                nombre:"La llamada",
                                duracion:"203",
                                stock:5,
                            },
                            {
                                id:"g3p2",
                                nombre:"El pianista",
                                duracion:"116",
                                stock:15,
                            },
                            {
                                id:"g3p3",
                                nombre:"Tras el espejo",
                                duracion:"92",
                                stock:0,
                            }
                        ]
                },

                {
                    id:"g4",
                    nombre:' 🔴  Acción',
                        products:[
                            {
                                id:"g4p1",
                                nombre:"Rápido y furioso 9",
                                duracion:"230",
                                stock:5,
                            },
                            {
                                id:"g4p2",
                                nombre:"Francotirador",
                                duracion:"185",
                                stock:15,
                            },
                            {
                                id:"g4p3",
                                nombre:"The avengers",
                                duracion:"190",
                                stock:0,
                            }
                        ]
                },

                {
                    id:"g5",
                    nombre:' 🔴  EVENTOS',
                        products:[
                            {
                                id:"g4p1",
                                nombre:"Privado",
                                duracion:"250",
                                stock:5,
                            },
                            {
                                id:"g4p2",
                                nombre:"Francotirador",
                                duracion:"185",
                                stock:15,
                            },
                            {
                                id:"g4p3",
                                nombre:"The avengers",
                                duracion:"190",
                                stock:0,
                            }
                        ]
                }

                
        ];

        const [products, setProducts] = useState(listaPeliculas);


    return (
        <>
        <FilterableProductTable 
            listaPeliculas={products}
            onAddProduct={(newProductObj, categoryId) => {
                //1. crear nuevo arreglo de products
                const newProducts = [];
                for (let i = 0; i < products.length; i++) {
                    if (products[i].id !== categoryId) {
                        newProducts.push(products[i]);
                    }
                    else{
                        newProducts.push(
                            {
                                ...products[i],
                                products:[...products[i].products, newProductObj]
                            }
                        );
                    }                    
                }

                //2. Cambiar el arreglo de products a traves de la función setProducts
                setProducts(newProducts);
                console.log({newProducts});
                console.log(categoryId);
                //console.log(productObj);
            }}
        />
        
        </>
        
    );
    
}

export default PeliculasPage;