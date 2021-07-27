import React from 'react'
import css from '../assets/css/app.css'
import Header from "../components/header";
import Main from "../components/Main";
import Inicio from "../pages/inicio"
import postCreate from "../pages/postCreate"

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
               <Inicio></Inicio>
            </React.Fragment>
        )
    }
}

export default App;