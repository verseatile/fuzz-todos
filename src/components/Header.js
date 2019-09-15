import * as React from "react"
import Text from "./Text"
import styled from "styled-components"
import { HeaderText } from "../styles"



export function Header() {
    return (
        <div style={{ padding: 40 }}>
            <HeaderText
                color="#222"
                size="60px"
                type="h1"
                family="Roboto"
                weight={300}
                align="center"
            >
                ¡todos!
            </HeaderText>
            <HeaderText
                color="#222"
                type="body"
                family="Roboto"
                weight={300}
                align="center"
            >
                todos for everyone.
            </HeaderText>
        </div>
    )
}

