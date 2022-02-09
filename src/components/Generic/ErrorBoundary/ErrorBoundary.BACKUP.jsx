
import React, { Component } from 'react'

class ErrorBoundaty extends Component{

    //El constructor solo se necesita si necesitamos asignar un state.
    constructor(props){
        super(props)

        this.state = {
            activo: false
        }

    }

    estaActivo = () => {
        return this.state.activo ? "Activo" : "Inactivo"
    }

    onClickHandler = () => {

        this.setState({activo: true})


    }

    componentDidMount(){

        console.log("El componente se ha montado")

    }

    componentDidUpdate(prevPros,prevState){

        console.log("Estado previo:", prevState.activo)
        console.log("Estado nuevo:", this.state.activo)
        console.log("El componente se ha actualizado")
    }

    componentWillUnmount(){
        console.log("El componente se ha desmontado")
    }

    render(){
        return (
            <div>
                <button onClick={this.onClickHandler}>Activar</button>
                <h1>
                    ErrorBoundary: {this.props.saludo}
                    {
                        this.estaActivo()
                    }
                </h1>
            </div>
        
        )
    }
}

export default ErrorBoundaty