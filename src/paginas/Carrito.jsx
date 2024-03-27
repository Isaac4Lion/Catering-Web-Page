import '../Carrito.css'
import { useNavigate } from 'react-router-dom'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'
import xItem from '../assets/xItem.svg'

export function Carrito({allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal}){
    const navigate = useNavigate();
    const retornar = () =>{
        let path = `/`
        navigate(path)
    }
    const onDeleteProduct = product =>{
        if (product.cantidad===1){
            const results = allProducts.filter(item => item.id !== product.id);
            setAllProducts(results)
        }else{
            const results = allProducts.map(item => 
                item.id === product.id ? {...item, cantidad: item.cantidad - 1}: item);
            setAllProducts(results)
        }
        setTotal(total - product.precioUnidad)
        setCountProducts(countProducts - 1)

    }

    const onPagar= ()=>{
        if(allProducts.length > 0){
            window.alert("Se ha relizado la compra correctamente \nGracias por preferirnos ☺")
            setAllProducts([])
            setCountProducts(0)
            setTotal(0)
            retornar()
        }else{
            window.alert("No hay productos en el carrito :(")
        }
    }

    return (
        <div className='pageCarrito'>
            <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Regresar" /></button>
            <div className="logoConTexto">
                <img src={logoTexto} alt="Aroma Gourmet" />
            </div>
            <div className="contenedorCarrito">
                <div className="tituloContenedor">
                        <h2>Carrito de compras</h2>
                </div>
                <div className="contenedor">
                    <div className="tituloTabla">
                        <span></span>
                        <span></span>
                        <span>Precio</span>
                        <span>Cantidad</span>
                        <span>Subtotal</span>
                    </div>
                    <div className="carrito">
                        <div className="listaItems">
                            {allProducts.map(product => (
                                <div className="item" key={product.id}>
                                    <img className='xItem' src={xItem} alt="X" onClick={()=>onDeleteProduct(product)}/>
                                    <img className="imagenCarrito" src={product.imagenSRC}/>
                                    <span>{product.nombreProducto}</span>
                                    <div className="detalleItem">
                                        <span>${product.precioUnidad}</span>
                                    </div>
                                    <div className="detalleItem">
                                        <span>{product.cantidad}</span>
                                    </div>
                                    <div className="detalleItem subtotalItem">
                                        <span>${product.cantidad * product.precioUnidad}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="resultItem">
                        <button onClick={()=>onPagar()}>PAGAR</button>
                        <div className="totalItems">
                            <div className="totalItem">
                                <span>TOTAL</span>
                                <span className="resultados">${total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}