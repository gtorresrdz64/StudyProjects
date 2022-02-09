
import React, { Component } from 'react'

class ErrorBoundaty extends Component{

    //El constructor solo se necesita si necesitamos asignar un state.
    constructor(props){
        super(props)

        this.state = {
          hasError: false
        }

    }

    static getDerivedStateFromError(error){
        return { hasError: true}
    }

    componentDidCatch(error,errorInfo){

        console.log("ErrorInfo",errorInfo)
    }

    render(){
        return (
            this.state.hasError ? 
            (<h1>Hubo un error</h1>)
            :
            (this.props.children)
        )
    }
}

export default ErrorBoundaty