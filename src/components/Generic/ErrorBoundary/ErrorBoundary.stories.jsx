import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default{
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponentWithoutError= () => <h1>Sin Error</h1>

const prop = undefined

const ComponentWithError= () => <h1>{prop.hola}</h1>

export const ErrorBoundaryExampleWithError = () =>  (
<ErrorBoundary>
    <ComponentWithError/>
</ErrorBoundary>)

export const ErrorBoundaryExampleWithoutError = () => (
<ErrorBoundary>
    <ComponentWithoutError/>
</ErrorBoundary>)