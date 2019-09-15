import * as React from "react"
import Text from "./Text"
import styled from "styled-components"


export function Header() {
    return (
        <div style={{ padding: 40 }}>
            <Text
                color="#222"
                size="60px"
                type="h1"
                family="Roboto"
                weight={300}
                align="center"
            >
                ¡todos!
            </Text>
            <Text
                color="#222"
                type="body"
                family="Roboto"
                weight={300}
                align="center"
            >
                todos for everyone.
            </Text>
        </div>
    )
}
