import React,{useState, useEffect, useRef} from 'react'
import css from '../assets/css/PostCreate.css'
import socket from "../components/socket";




const feed = ({nombre}) => {
    const [publicacion, setPublicacion] = useState("");
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(()=>{
        socket.on('connection',()=>{
           console.log('conexion exitosa')
       },[nombre]);
    })


        return(
            <div id="fondo">
                <h1 id="titulo">Crear Publicacion</h1>
                <div id="borde">
                    <textarea  id="inputPost" name="comentarios"  placeholder="¿Que estas pensando?"></textarea>
                    <div className="alert " id="infoColor" role="alert">
                        Selecciona la foto que te guste
                    </div>
                    <button id="botonPublicar" >Publicar</button>
                </div>
            </div>
        )
    }


export default  feed;