import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Header } from "../components/Header"
import TodoList from "../components/TodoList"


export default function App() {
    return (
        <Global>
            <Header />
            <TodoList />
        </Global>
    )
}

const Global = styled.div`
    background: #DEDEDE;
    min-height: 100vh;
    padding-bottom: 20px;
`
