import '../OpcionProducto.css'
import { useNavigate } from "react-router-dom"
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'
import { useEffect } from 'react';

export function EliminarP({loggedIn}) {
    const navigate = useNavigate();
    const retornar = () =>{
        let path = `/admin`
        navigate(path)
    }
    useEffect(()=>{
        if (!loggedIn){
            navigate(`/`)
        }
        })

    return (
        <div className='pageAdmin'>
            <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Regresar" /></button>
            <div className="logoConTexto">
                <img src={logoTexto} alt="Aroma Gourmet" />
            </div>
            <div className="contenedorAdminOpciones">
                <div className="tituloContenedor">
                        <h2>ELIMINAR PRODUCTO</h2>
                </div>
                <div className="contenedorAdminOpcion">
                    <div className="inputAdminOpcion">
                        <label >Codigo del Producto: </label>
                        <input type="number" placeholder='Buscar producto por ID'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
