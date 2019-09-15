import React from "react"
import styled from "styled-components"


export default function Text(props) {
    switch (props.type) {
        case "h1":
            return (
                <H1
                    {...props}
                >
                    {props.children}
                </H1>
            )
        case "h2":
            return (
                <H2
                    {...props}
                >
                    {props.children}
                </H2>
            )
        case "h3":
            return (
                <H3
                   {...props}
                >
                    {props.children}
                </H3>
            )
        case "body":
            return (
                <H3
                    {...props}
                >
                    {props.children}
                </H3>
            )

        default:
            return (
                <H3
                    {...props}
                >
                    {props.children}
                </H3>
            )
    }
}

const H1 = styled.h1`
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    text-align: ${props => props.align};
    font-family: ${props => props.family};
    margin: 0;
`

const H2 = styled.h2`
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    text-align: ${props => props.align};
    font-family: ${props => props.family};
    margin: 0;
`

const H3 = styled.h3`
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    text-align: ${props => props.align};
    font-family: ${props => props.family};
    margin: 0;
`
