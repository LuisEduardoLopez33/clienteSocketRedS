import React from 'react'
import css from '../assets/css/PostCreate.css'


class PostCreate extends React.Component {
    render(){
        return(
            <div id="fondo">
                <h1 id="titulo">Crear Publicacion</h1>
                <div id="borde">
                    <textarea  id="inputPost" name="comentarios"  placeholder="¿Que estas pensando?"></textarea>
                    <div className="alert " id="infoColor" role="alert">
                        Selecciona la foto que te guste
                    </div>
                </div>
            </div>
        )
    }
}
export default PostCreate;