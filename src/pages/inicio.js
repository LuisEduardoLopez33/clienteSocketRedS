import React from 'react'
import css from '../assets/css/inicio.css'

class inicio extends  React.Component {
    render() {
        return(

            <div className="fondo">
                <section className="section">
                    <br/>
                    <h1 className="letras">Registrate</h1>
                    <div>
                        <h3 id="usuarioname">Nombre usuario</h3>
                        <input className="input1"/>
                        <button id="botonInicio">Iniciar</button>
                    </div>
                </section>
            </div>

        )
    }


}

export default inicio;