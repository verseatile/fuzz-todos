import React from "react"
import styled from "styled-components"
import { todo_reducer } from "../reducers"
import uuidv4 from "uuid/v4"
import Text from './Text'
import TodoItem from './TodoItem'
import { GeneralBtn, MainControls, PrimaryInput, HeaderText } from "../styles"


export function TodoList() {
    const [todos, dispatch] = React.useReducer(todo_reducer, [])
    const [inputState, setInputState] = React.useState(null)
    const [filterState, setFilterState] = React.useState(0) // use enum or string

    const FILTERS = {
        ALL : 0,
        COMPLETE: 1,
        INCOMPLETE: 2
    }

    const renderTodos = () => {
        if (todos.length) {
            switch(filterState) {
                case FILTERS.ALL:
                    // render all
                    return todos.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={() => removeTodo(todo.id)}
                        completion={() => changeCompletion(todo.id)}
                        dueDate={changeDueDate}
                        textEdit={handleTextEdit} />
                    )) 
                case FILTERS.COMPLETE:
                    // render only those that are complete
                    return todos.filter((item) => item.isComplete == true).map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={() => removeTodo(todo.id)}
                        completion={() => changeCompletion(todo.id)}
                        dueDate={changeDueDate}
                        textEdit={handleTextEdit} />

                    ))
                case FILTERS.INCOMPLETE:
                    // render only incomplete
                    return todos.filter((item) => item.isComplete != true).map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={() => removeTodo(todo.id)}
                        completion={() => changeCompletion(todo.id)}
                        dueDate={changeDueDate}
                        textEdit={handleTextEdit} />
                    ))
                default:
                    // render all?
                    return todos.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={() => removeTodo(todo.id)}
                        completion={() => changeCompletion(todo.id)}
                        dueDate={changeDueDate}
                        textEdit={handleTextEdit} />
                    )) 
            }

        }
        else {
            return (
                <div style={{ padding: "120px 40px" }}>
            <HeaderText
                size="20px"
                type="h1"
                family="Roboto"
                weight={300}
                align="center"
            >
                Add a todo to get started.
            </HeaderText>
        </div>
            )
        }
        
    }

    /* ACTION CREATORS  */
    const addTodo = text => {
        if (!text) {
            return
        }
        console.log(todos)
        let date = Date.now()
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: uuidv4(),
                date_added: date,
                date_due: 1, // default is one day from now
                isComplete: false,
                task: text,
            },
        })
        console.log("DATE: ", date)
        // clear the input
        setInputState("")
        let input = document.getElementById("main-input")
        input.value = ""
        input.focus()
    }

    const removeTodo = (id) => {
        dispatch({type: "REMOVE_TODO", targetId: id})
    }

    const changeCompletion = (id) => {
        dispatch({type: "CHANGE_COMPLETION", targetId: id})
    }

    const changeDueDate = (id, dueDate) => {
        dispatch({ type: "CHANGE_DUE_DATE", targetId: id, dueDate: dueDate })
    }

    const sortByDueDate = () => {
        dispatch({ type: "SORT_DUE_DATE" })
    }

    const sortDateAdded = () => {
        dispatch({ type: "SORT_DATE_ADDED" })
    }

    const handleTextEdit = (text, id) => {
        dispatch({ type: "EDIT_TODO", payload: text, targetId: id })
    }
    /* END OF ACTION CREATORS  */

    return (
        <div>
            <MainControls>
                <div>
                    <PrimaryInput
                        id="main-input"
                        onKeyDown={(e) => e.key === "Enter" ? addTodo(e.target.value) : null}
                        onChange={e => setInputState(e.target.value)}
                    />
                    <GeneralBtn
                        onClick={() => addTodo(inputState)}
                        style={{
                            display: "inline",
                        }}
                    >
                        ADD
                    </GeneralBtn>
                </div>
                

                {/* filter options */}
                <div style={{ flex: 1, marginTop: 20 }}>
                    <GeneralBtn onClick={() => sortByDueDate()}>Sort by Due Date</GeneralBtn>
                    <GeneralBtn onClick={() => sortDateAdded()}>Sort by Date Added</GeneralBtn>
                    <GeneralBtn onClick={() => setFilterState(FILTERS.COMPLETE)}>Filter By Completed</GeneralBtn>
                    <GeneralBtn onClick={() => setFilterState(FILTERS.INCOMPLETE)}>Filter By Incomplete</GeneralBtn>
                    <GeneralBtn onClick={() => setFilterState(FILTERS.ALL)}>Show All Items</GeneralBtn>
                </div>
            </MainControls>
            {renderTodos()}
        </div>
    )
}