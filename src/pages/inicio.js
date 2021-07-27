import React,{useState} from 'react'
import css from '../assets/css/inicio.css'
import socket from "../components/socket";
import Feed from './feed';

function inicio () {
   const [nombre, setNombre] = useState("");
   const [registrado, setRegistrado] = useState(false);
   const registrar = (e) => {
       e.preventDefault();
       if(nombre !== ""){
           setRegistrado(true);
       }
   }

        /*socket.on('connection',()=>{
            console.log('conexion exitosa')
        });*/

        return(
            <div className="fondo">
                {
                    !registrado &&

                    <section className="section">
                        <br/>
                        <h1 className="letras">Registrate</h1>
                        <div>
                            <form >
                                <h3 id="usuarioname">Nombre usuario</h3>
                                <input className="input1" value={nombre} onChange={e => setNombre(e.target.value)}/>
                                <button id="botonInicio" onClick={registrar}>Iniciar</button>
                            </form>
                        </div>
                    </section>
                }
                {
                    registrado &&
                    <Feed nombre={nombre}/>
                }

            </div>

        )



}

export default inicio;