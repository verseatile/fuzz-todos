import React from "react"
import { render } from "react-dom"
import App from "./components/App"

render(<App />, document.getElementById("render-target"))

console.log("Vanilla ES6")

document.body.style.margin = 0