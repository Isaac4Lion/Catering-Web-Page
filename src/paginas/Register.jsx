import '../Login.css'
import { useNavigate } from 'react-router-dom'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'
import { usuarios } from '../dataUsuarios.js'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export function Register(){
    const navigate = useNavigate();

    const retornar = () =>{
        let path=`/`
        navigate(path)
    }
    
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    function handleChangeUsuario(event) {
        setUsuario(event.target.value);
    }
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }


    return (
        <>
            <div className='login'>
                <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Regresar" /></button>
                <img className='logoConTexto' src={logoTexto} alt="Aroma Gourmet" />
                <div className="loginContenedor">
                    <div id='loginInteractivo' className='loginTitulo'>
                        <h2>REGISTRO DE CLIENTE</h2>
                    </div>
                    <div className="inputLogin">
                        <label >Nombre de Usuario </label>
                        <input onChange={handleChangeUsuario} value={usuario} type="text" placeholder='Ingresa tu nombre de usuario'/>
                    </div>
                    <div className="inputLogin">
                        <label >Apellido </label>
                        <input type="text" placeholder='Ingresa tu apellido'/>
                    </div>
                    <div className="inputLogin">
                    <div className="inputLogin">
                        <label >Correo </label>
                        <input  type="email" placeholder='Ingresa tu correo electrónico'/>
                    </div>
                        <label >Contraseña </label>
                        <input onChange={handleChangePassword} value={password} type="password" placeholder='Ingresa tu contraseña'/>
                    </div>
                    <button>INGRESAR</button>
                    <span>¿Ya te has registrado? <Link to="/login">Ingresa aquí</Link></span>
                    
                </div>
            </div>
        </>
    )
}