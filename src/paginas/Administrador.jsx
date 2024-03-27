import '../Administrador.css'
import { useNavigate } from 'react-router-dom'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'
import ingresar from '../assets/admin/ingresoIcon.svg'
import modificar from '../assets/admin/modificarIcon.svg'
import eliminar from '../assets/admin/eliminarIcon.svg'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

export function Administrador({loggedIn, setLoggedIn}){
    const navigate = useNavigate();
    const retornar = () =>{
        setLoggedIn(false)
        let path = `/login`
        navigate(path)
    }
    useEffect(()=>{
        if (!loggedIn){
            retornar()
        }
        })
    return (
        <div className='pageCarrito'>
            <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Regresar" /></button>
            <div className="logoConTexto">
                <img src={logoTexto} alt="Aroma Gourmet" />
            </div>
            <div className="contenedorAdmin">
                <h2>ESCOJE UNA TAREA A REALIZAR</h2>
                <div className="opcionesAdmin">
                    <Link to="/admin/agregarP" className='opcionAdmin'>
                        <img src={ingresar} alt="Aniadir" />
                        <button>AÑADIR PRODUCTO/S</button>
                    </Link>
                    <Link to="/admin/modificarP" className='opcionAdmin'>
                        <img src={modificar} alt="Modificar" />
                        <button>MODIFICAR PRODUCTO/S</button>
                    </Link>
                    <Link to="/admin/eliminarP" className='opcionAdmin'>
                        <img src={eliminar} alt="Eliminar" />
                        <button>ELIMINAR PRODUCTO/S</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}