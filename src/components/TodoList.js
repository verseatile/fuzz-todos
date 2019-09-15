import * as React from "react"
import { todo_reducer } from "../reducers"
import { init_todos } from "../data/data"
import uuidv4 from "uuid/v4"
import Text from './Text'
import TodoItem from './TodoItem'


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
            <Text
                color="#222"
                size="20px"
                type="h1"
                family="Roboto"
                weight={300}
                align="center"
            >
                Add a todo to get started.
            </Text>
        </div>
            )
        }
        
    }

    const addTodo = text => {
        if (!text) {
            return
        }
        console.log(todos)
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: uuidv4(),
                date_added: new Date().toString(),
                date_due: new Date().toString(),
                isComplete: false,
                task: text,
            },
        })
        // clear the input
        setInputState("")
        document.getElementById("main-input").value = ""
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
    

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                    position: 'sticky', 
                    top: 0,
                    background: "#DEDEDE"
                }}
            >
                <input
                    id="main-input"
                    onChange={e => setInputState(e.target.value)}
                    style={{ height: 35, width: "80%", fontSize: 26, fontWeight: 300, marginRight: 30 }}
                />
                <button
                    onClick={() => addTodo(inputState)}
                    style={{
                        display: "inline",
                        padding: "0 10px",
                        border: "none",
                        height: 20,
                    }}
                >
                    ADD
                </button>

                {/* filter options */}
                <div style={{ display: 'block' }}>
                    <button onClick={() => sortByDueDate()}>Sort by Due Date</button>
                    <button onClick={() => sortDateAdded()}>Sort by Date Added</button>
                    <button onClick={() => setFilterState(FILTERS.COMPLETE)}>Filter By Completed</button>
                    <button onClick={() => setFilterState(FILTERS.INCOMPLETE)}>Filter By Incomplete</button>
                    <button onClick={() => setFilterState(FILTERS.ALL)}>Show All Items</button>


                </div>
            </div>
            {renderTodos()}
        </div>
    )
}
