import React from 'react'
import css from "../assets/css/post.css"
import prueba from "../assets/imagenes/puestaSol.jpg"
import corazon from "../assets/SVG/favorite_border_white_24dp.svg"
import corazonlleno from "../assets/SVG/favorite_border_white_24dp.svg"
import comentario from "../assets/SVG/chat_bubble_white_24dp.svg"
class post extends React.Component{
    render() {
        return(
            <div className="fondo">
                <section id="bordepost">
                    <div id="header">
                        <h2 id="username">Luis Paulo</h2>
                        <p id="descripcion">Los atardeceres son la obra mas bonita de Dios</p>
                    </div>
                    <div  id="card" >
                        <img src={prueba} className="card-img-top" />
                    </div>
                    <footer>
                        <button type="button" id="corazonColor">
                                <img id="borderColor" src={corazon} alt="" width="50" height="40"/>
                        </button>
                        <button type="button" id="comentario">
                            <img id="borderColor" src={comentario} alt="" width="50" height="40"/>
                        </button>
                        <textarea id="inputComentario" name="comentarios"  placeholder="Comentario"/>
                        <button id="botonComentario" >Comentar</button>
                    </footer>
                </section>
            </div>
        )


    }
}
export default post;