import styled from "styled-components"
import { motion } from "framer-motion"
import Text from "../components/Text"


export const Todo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.cardColor || "#FFF"};
    height: 60px;
    margin: 20px 5%;
    padding: 10px 18px;
    border-radius: 4px;
    -webkit-box-shadow: ${props => props.theme.shadow || ""};
    -moz-box-shadow: ${props => props.theme.shadow || ""};
    box-shadow: ${props => props.theme.shadow || ""};
    color: ${props => props.theme.cardTextColor || "#FFF"};
`

export const TodoText = styled(Text)`
    text-decoration: ${props => props.strikeThrough ? 'line-through' : null};
    margin-bottom: 10px;
    color: ${props => props.theme.cardTextColor || "#222"};
`

export const GeneralBtn = styled.button`
    display: inline;
    padding: 0 10px;
    border: ${props => `${props.theme.buttonBorder}` || "none"};
    height: 35px;
    color: ${props => props.theme.cardTextColor || "#222"};
    cursor: pointer;
    background: ${props => props.theme.cardColor || "#FFF"};

    &:hover {
        background: ${props => props.custom || "#333"};
        color: #FFF;
    }
`

export const MainControls = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* -webkit-box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);
    -moz-box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);
    box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25); */}
    display: flex;
    margin: 0 auto;
    position: sticky;
    top: 0;

    > div {
        justify-content: center;
        align-items: center;
        display: flex;
    
    }
`

export const PrimaryInput = styled.input`
    height: 36px;
    max-width: 320px;
    width: 100%;
    font-size: 20px;
    font-weight: 300;
    margin-right: 30px;
    background: ${props => props.theme.cardColor || "#FFF"};
    border: ${props => `${props.theme.inputBorder}` || ""};
    color: ${props => props.theme.cardTextColor || "#222"};
`

export const ColorTile = styled.span`
    flex: 1;
    display: block;
    height: 40px;
    background: ${props => props.color};
`

export const HeaderText = styled(Text)`
    color: ${props => props.theme.textColor || "#222"};
`

export const ItemControls = styled(motion.div)`

`

// global themes
export const bulmaish = {
    background: "#50E3C2",
    textColor: "#FFF",
    buttonBorder: "none",
    inputBorder: "none",
    containerBorder: "",
    cardColor: "#FFF",
    cardTextColor: "#222",
    shadow: "0px 9px 12px -5px rgba(133,133,133,0.25)"
}

export const dark = {
    background: "#222",
    textColor: "#FFF",
    buttonBorder: "none",
    inputBorder: "none",
    containerBorder: "",
    cardColor: "#333",
    cardTextColor: "#FFF",
    shadow: "",
}

export const macos = {
    background: "#EEEEEE",
    textColor: "#333",
    buttonBorder: "0.5px solid #333",
    inputBorder: "0.5px solid #333",
    containerBorderColor: "#222",
    cardColor: "#FFF",
    cardTextColor: "#222",
    shadow: "",
    inputBorderColor: "#222"
}

export const mango = {
    background: "#F5A623",
    textColor: "#333",
    buttonBorder: "",
    inputBorder: "none",
    containerBorderColor: "",
    cardColor: "#FFF",
    cardTextColor: "#222",
    shadow: "0px 9px 12px -5px rgba(133,133,133,0.25)",
    inputBorderColor: ""
}

export const berry = {
    background: "#C40061",
    textColor: "#FFF",
    buttonBorder: "",
    inputBorder: "none",
    containerBorderColor: "#222",
    cardColor: "#FFF",
    cardTextColor: "#222",
    shadow: "0px 9px 12px -5px rgba(133,133,133,0.25)",
    inputBorderColor: ""
}