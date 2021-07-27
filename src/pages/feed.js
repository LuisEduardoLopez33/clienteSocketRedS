import React,{useState, useEffect, useRef} from 'react'
import css from '../assets/css/PostCreate.css'
import socket from "../components/socket";




const feed = ({nombre}) => {
    const [publicacion, setPublicacion] = useState("");
    const [publicaciones, setPublicaciones] = useState([]);
    const [imagen, setImagen] = useState("");
    useEffect(()=>{
        socket.on('connection',()=>{
           console.log('conexion exitosa')
       })},[nombre]);

    useEffect(()=>{
        //guarda las publicaciones enviadas desde el servidor en el array
        socket.on("publicaciones", (publicacion)=>{
            setPublicaciones([...publicaciones, publicacion]);
        });
        return () =>{
            socket.off();
        };

    }, [publicaciones]);

  const submit = (e) =>{
      //se enviara los datos que el usuario haya puesto para la publicacion
      e.preventDefault();
      socket.emit("publicacion",nombre,publicacion,imagen);
      setPublicacion("");
      setImagen("");

    }
        return(
            <div id="fondo">
                <h1 id="titulo">Tuiter</h1>
                <div id="borde">
                    <textarea  id="inputPost" name="comentarios"  placeholder="¿Que estas pensando?"
                               value ={publicacion}
                    onChange={(e)=>setPublicacion(e.target.value)}></textarea>
                    <div className="alert " id="infoColor" role="alert" >
                        Selecciona la foto que te guste
                    </div>
                    <button id="botonPublicar" onClick={submit}>Publicar</button>
                </div>
            </div>
        )
    }


export default  feed;