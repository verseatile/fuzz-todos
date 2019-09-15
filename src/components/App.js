import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled, { ThemeProvider } from "styled-components"
import { Header } from "./Header"
import { TodoList } from "./TodoList"
import ThemePicker from "./ThemePicker"
import { bulmaish } from "../styles"


export default function App() {
    const [currentTheme, setTheme] = React.useState(bulmaish)


    return (
        <ThemeProvider theme={currentTheme}>
            <AnimatePresence>
                <Global 
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}>
                    <ThemePicker setTheme={setTheme} />
                    <Header />
                    <TodoList />
                </Global>
            </AnimatePresence>
        </ThemeProvider>
    )
}



const Global = styled(motion.div)`
    background: ${props => props.theme.background};
    min-height: 100vh;
    padding-bottom: 20px;
`
