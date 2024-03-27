import '../styles/Login.css'
import regresarIcon from '../assets/botonRegresar.svg'
import logoTexto from '../assets/logoConTexto.svg'

import { usuarios } from '../dataUsuarios.js'
import { admins } from '../dataAdmins.js'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export function Login({loginAdmin,setLoginAdmin, loggedIn, setLoggedIn}){
    const navigate = useNavigate();

    const retornar = () =>{
        let path=`/`
        if (loggedIn && loginAdmin){
            navigate(`/admin`)
        }else{
            navigate(path);
        }
    }
    
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    //Handle the form values enters by user.
    function handleChangeUsuario(event) {
        setUsuario(event.target.value);
    }
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    const onLogginButton = () => {
        var encontrado=false

        //First check if is admin or not, then check the data with the user input
        if (!loginAdmin){
            encontrado = usuarios.find(user => usuario === user.usuario && password === user.password)
        }else{
            encontrado = admins.find(admin => usuario === admin.usuario && password === admin.password)
        }

        if(!encontrado){
            window.alert("Ingrese datos correctos")
            setUsuario('')
            setPassword('')
        }else{
            setLoggedIn(true)
        }
    }

    const isAdmin = () =>{
        if (!loginAdmin){
            setLoginAdmin(true)
        }else{
            setLoginAdmin(false)
        }
        return loginAdmin
    }

    //Then that log in redirect to the page specified
    useEffect(() => {
        if(loggedIn){
            retornar()
        }
    });

    return (
        <>
            <div className='login'>
                <button onClick={retornar} className='botonRegresar'><img src={regresarIcon} alt="Regresar" /></button>
                <img className='logoConTexto' src={logoTexto} alt="Aroma Gourmet" />
                <div className="loginContenedor">
                    <div id='loginInteractivo' className='loginTitulo'>
                        <h2>INICIO DE SESIÓN</h2>
                        {!loginAdmin ? <span>Cliente</span> : <span>Administrador</span>}
                    </div>
                    <div className="inputLogin">
                        <label >Nombre de Usuario </label>
                        <input onChange={handleChangeUsuario} value={usuario} type="text" placeholder='Ingresa tu nombre de usuario'/>
                    </div>
                    <div className="inputLogin">
                        <label >Contraseña </label>
                        <input onChange={handleChangePassword} value={password} type="password" placeholder='Ingresa tu contraseña'/>
                    </div>
                    <span>¿Has olvidado tu contraseña?<a href="#root"> Click Aquí</a></span>
                    <button onClick={()=>onLogginButton()}>INGRESAR</button>
                    <span>¿No tienes una cuenta? <Link to="/register">Registrate aquí</Link></span>
                    {!loginAdmin ? <span>¿Eres Administrador? <a style={{cursor: 'pointer'}} onClick={()=>isAdmin()}>Click aquí</a></span> 
                    : <span>¿Eres Cliente? <a style={{cursor: 'pointer'}} onClick={()=>isAdmin()}>Click aquí</a></span>}
                </div>
            </div>
        </>
    )
}