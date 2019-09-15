import React from "react"
import Text from "./Text"
import { AnimatePresence } from "framer-motion"
import { TodoText, Todo } from "../styles"
import { GeneralBtn } from "../styles"


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
                type="h2"
                family="Roboto"
                weight={300}
                align="left"
                strikeThrough={todo.isComplete}
            >
                {currentText || todo.task}
                
            </TodoText>
            {/* <Text style={{ fontSize: 14 }} type="body" family="Roboto" weight={300}>{todo.date_added}</Text> */}
            <Text style={{ fontSize: 12 }} type="body" family="Roboto" weight={300}>
                Due: 
                {todo.date_due.month 
                ? ` ${todo.date_due.month}/${todo.date_due.day}/${todo.date_due.year}` 
                : ` ${new Date(todo.date_due).getMonth()}/${new Date(todo.date_due).getDate()}/${new Date(todo.date_due).getFullYear()}`}
                </Text>

            </span>
            ) : (
                <input id={todo.id} style={{ fontSize: 16, width: 250 }} onChange={e => {changeText(e.target.value)}} defaultValue={currentText || todo.task} />
            )}
            
            </span>
            <GeneralBtn onClick={completion} style={{ }}>COMPLETE</GeneralBtn>
            <GeneralBtn onClick={() => {toggleModal(!modalOpen) }} style={{ }}>SET DUE DATE</GeneralBtn>
            <GeneralBtn onClick={(e) => {changeEdit(!edit); textEdit(currentText || todo.task, todo.id); }} style={{ }}>EDIT</GeneralBtn>
            <GeneralBtn onClick={remove} style={{ }}>DELETE</GeneralBtn>

            {modalOpen ? <DatePicker id={todo.id} dueDate={dueDate} toggleModal={toggleModal} /> : null}
        </Todo>
        </AnimatePresence>

    )
}

const DatePicker = ({toggleModal, dueDate, id}) => {
    const [date, setDate] = React.useState("")
    document.body.style.overflowY = "hidden"
    
    // split due date
    let [year, month, day] = date.split("-")
    console.log(year)

    const sortDates = () => {

    }

        return <div id="modal" style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", position: 'absolute', height: '100%', width: "100%", background: "rgba(0,0,0,0.5)",zIndex: 1000, top: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", height: 300, width: "50%", background: "#FFF" }}>
                <Text type="h2" family="Roboto" align="center">SET DATE</Text>
                <input style={{ width: "100%" }} onChange={(e) => setDate(e.target.value)} type="date" />
                <Text type="h2" family="Roboto" align="center">{date}</Text>


                <GeneralBtn onClick={() => {dueDate(id, { year, month, day }); toggleModal(false); document.body.style.overflowY = "scroll"}}>Set Due Date</GeneralBtn>
                <GeneralBtn onClick={() => toggleModal(false)}>Cancel</GeneralBtn>
            </div>
            
    </div>
    
    
}
