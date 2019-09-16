import React from "react"
import Text from "./Text"
import { AnimatePresence, motion } from "framer-motion"
import { GeneralBtn, ItemControls, TodoText, Todo } from "../styles"
import DatePicker from "./DatePicker"


// if edit, change the todo text to an input field with that text as its value
export default function TodoItem ({ todo, remove, completion, dueDate, textEdit }) {
    const [edit, changeEdit] = React.useState(false)
    const [currentText, changeText] = React.useState("")
    const [modalOpen, toggleModal] = React.useState(false)

    return (
        <AnimatePresence>
        <Todo
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1 }}
        positionTransition
        >
            <span style={{ flex: 1 }}>
            {!edit ? (
                <span>
                <TodoText
                color="#222"
                type="h3"
                family="Roboto"
                weight={300}
                align="left"
                strikeThrough={todo.isComplete}
            >
                {currentText || todo.task}
                
            </TodoText>
            <TodoText style={{ fontSize: 12 }} type="body" family="Roboto" weight={300}> 
                {/* {todo.date_due 
                ? `Due: ${new Date.getMonth(todo.date_due)}/${new Date.getDate(todo.date_due.day)}/${new Date.getFullYear(todo.date_due.year)}`//`Due: ${todo.date_due.month}/${todo.date_due.day}/${todo.date_due.year}` 
                : ``} */}
                {`Due in ${todo.date_due} ${todo.date_due > 1 ? "days" : "day"}`}
                </TodoText>

            </span>
            ) : (
                <input id={todo.id} style={{ fontSize: 16, width: 250 }} onChange={e => {changeText(e.target.value)}} defaultValue={currentText || todo.task} />
            )}
            
            </span>

            {/* todo item controls */}
            <ItemControls>
                <GeneralBtn onClick={completion} style={{ }}>COMPLETE</GeneralBtn>
                <GeneralBtn onClick={() => {toggleModal(!modalOpen) }} style={{ }}>SET DUE DATE</GeneralBtn>
                <GeneralBtn onClick={(e) => {changeEdit(!edit); textEdit(currentText || todo.task, todo.id); }} style={{ }}>EDIT</GeneralBtn>
                <GeneralBtn onClick={remove} custom="red">DELETE</GeneralBtn>
            </ItemControls>
            

            {modalOpen ? <DatePicker id={todo.id} dueDate={dueDate} toggleModal={toggleModal} /> : null}
        </Todo>
        </AnimatePresence>

    )
}
