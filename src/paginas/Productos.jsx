import { useState } from 'react'
import '../Productos.css'
import {productos} from '../dataProductos.js'
import Popup from 'reactjs-popup'


export function Productos({allProducts,setAllProducts, total, setTotal, countProducts, setCountProducts, loggedIn}){

    const onAddProduct = product =>{
        if (!loggedIn){
            window.alert("Debes ingresar sesión para pedir productos")
        }else{
            if (allProducts.find(item => item.id === product.id)){
                const products = allProducts.map(item => 
                    item.id === product.id ? {...item, cantidad: item.cantidad + 1}: item);
                setCountProducts(countProducts + product.cantidad)
                setTotal(total + product.precioUnidad * product.cantidad)
                
                return setAllProducts([...products])
            }
    
            setCountProducts(countProducts + 1)
            setTotal(total + product.precioUnidad * product.cantidad)
            setAllProducts([...allProducts, product])
        }
    }
    const [popupContent, setPopupContent] = useState('');
    
    return (
        <div className="containerPr">
            <h1>PLATOS A LA CARTA</h1>
            <div className="productos">
                {productos.map(product => (
                    <div className="producto" key={product.id}>
                        <Popup trigger={
                        <div>
                            <img
                                src={product.imagenSRC}
                                alt={product.id}
                                onMouseEnter={() => setPopupContent(product.descripcion)}
                                onMouseLeave={() => setPopupContent('')}
                            />
                        </div>
                        } 
                        closeOnDocumentClick 
                        closeOnEscape 
                        position="bottom"
                        on="hover">
                            <div>{product.descripcion}</div>
                        </Popup>
                        <div className="infoProducto">
                            <h4>{product.nombreProducto}</h4>
                            <p>{product.precioUnidad}USD por unidad - {product.precioDocena}USD por docena</p>
                        </div>
                        <button onClick={()=>onAddProduct(product)} >Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    )
}