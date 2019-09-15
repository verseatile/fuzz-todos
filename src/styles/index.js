import styled from "styled-components"
import { motion } from "framer-motion"
import Text from "../components/Text"

export const Todo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF;
    height: 60px;
    margin: 20px 5%;
    padding: 10px 18px;
    border-radius: 4px;

    -webkit-box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);
    -moz-box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);
    box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);
`

export const TodoText = styled(Text)`
    text-decoration: ${props => props.strikeThrough ? 'line-through' : null};
    margin-bottom: 10px;
`
export const GeneralBtn = styled.button`
    display: inline;
    padding: 0 10px;
    border: none;
    height: 35px;

    &:hover {
        background: #333;
        color: #FFF;
    }
`

export const MainControls = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);
    -moz-box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);
    box-shadow: 0px 9px 12px -5px rgba(133,133,133,0.25);

    > div {
        justify-content: center;
        align-items: center;
        display: flex;
    
    }
`
