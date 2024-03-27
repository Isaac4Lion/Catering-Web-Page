import '../styles/OpcionProducto.css'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'
import subirImagen from '../assets/admin/subirImagenIcon.svg'

import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

export function ModificarP({loggedIn}) {
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
                        <h2>MODIFICAR PRODUCTO</h2>
                </div>
                <div className="contenedorAdminOpcion">
                    <div className="inputAdminOpcion">
                        <label >Codigo del Producto: </label>
                        <input type="number" min={0} placeholder='Buscar producto por ID'/>
                    </div>
                    <div className="inputAdminOpcion">
                        <label >Nombre del Producto: </label>
                        <input type="text" placeholder='Ingresa el nombre del producto'/>
                    </div>
                    <div className="inputAdminOpcion">
                        <label >Precio por Unidad: </label>
                        <input type="number" step={".01"} min={0} placeholder='$0.00'/>
                    </div>
                    <div className="inputAdminOpcion">
                        <label >Precio por Docena: </label>
                        <input type="number" step={".01"} min={0} placeholder='$0.00'/>
                    </div>
                    <div className="inputAdminOpcion">
                        <label >Imagen: </label>
                        <div className='containerSubirImagen'>
                            <label htmlFor='subirImagenPersonalizado' className='subirImagen'>
                                <img src={subirImagen} alt="subirImagen" /><br />
                                Subir Imagen
                            </label>
                            <input type="file" accept=".jpg, .jpeg, .png" id='subirImagenPersonalizado'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
