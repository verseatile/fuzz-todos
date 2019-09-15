import * as React from "react"
import { todo_reducer } from "../reducers"
import uuidv4 from "uuid/v4"
import Text from './Text'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
    ADD_TODO, 
    REMOVE_TODO, 
    CHANGE_COMPLETION, 
    CHANGE_DUE_DATE, 
    SORT_BY_DUE_DATE, 
    SORT_DATE_ADDED } from "../actions"

function TodoList() {
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
                        dueDate={changeDueDate} />
                    )) 
                case FILTERS.COMPLETE:
                    // render only those that are complete
                    return todos.filter((item) => item.isComplete == true).map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={() => removeTodo(todo.id)}
                        completion={() => changeCompletion(todo.id)}
                        dueDate={changeDueDate} />
                    ))
                case FILTERS.INCOMPLETE:
                    // render only incomplete
                    return todos.filter((item) => item.isComplete != true).map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={() => removeTodo(todo.id)}
                        completion={() => changeCompletion(todo.id)}
                        dueDate={changeDueDate} />
                    ))
                default:
                    // render all?
                    return todos.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={() => removeTodo(todo.id)}
                        completion={() => changeCompletion(todo.id)}
                        dueDate={changeDueDate} />
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
        dispatch(ADD_TODO(text, uuidv4()))
        // clear the input
        setInputState("")
        document.getElementById("main-input").value = ""
    }

    const removeTodo = (id) => {
        dispatch(REMOVE_TODO(id))
    }

    const changeCompletion = (id) => {
        dispatch(CHANGE_COMPLETION(id))
    }

    const changeDueDate = (id, dueDate) => {
        dispatch(CHANGE_DUE_DATE(id, dueDate))
    }

    const sortByDueDate = () => {
        dispatch(SORT_BY_DUE_DATE())
    }

    const sortDateAdded = () => {
        dispatch(SORT_DATE_ADDED())
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

function mapStateToProps(state) {
    return {
        todos: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        ADD_TODO, 
        REMOVE_TODO, 
        CHANGE_COMPLETION, 
        CHANGE_DUE_DATE, 
        SORT_BY_DUE_DATE, 
        SORT_DATE_ADDED }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
