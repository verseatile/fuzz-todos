import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todo_reducer } from "./reducers"

const store = createStore(todo_reducer)

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("render-target"))

console.log("Vanilla ES6")

document.body.style.margin = 0