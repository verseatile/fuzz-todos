import { sortDueDate, sortDateAdded } from "../helpers"

export const todo_reducer = function(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            // change color
            // this specific layer should alter according to controls' value (slider, input value, etc.)
            // said value should come from action
            return [...state, action.payload]
        // console.log(state)

        case "REMOVE_TODO":
            // change text color
            return state.filter((item) => item.id !== action.targetId )

        case "EDIT_TODO":
            let idx = state.findIndex((item) => item.id == action.targetId) 
            if (idx < 0) {
                return state
            }
            console.log("copped the payload: ", action.payload) 
            console.log("idx = ", idx)
            state[idx].task = action.payload 
            return [
                ...state
            ]

        case "CHANGE_COMPLETION":
            idx = state.findIndex((item) => item.id == action.targetId)  
            if (idx < 0) {
                return state
            }
            state[idx].isComplete = !state[idx].isComplete 
            return [
                ...state
            ]
        
        case "CHANGE_DUE_DATE":
            // dueDate is in action.dueDate
            idx = state.findIndex((item) => item.id == action.targetId)  
            if (idx < 0) {
                return state
            }
            // let date = new Date()
            // state[idx].date_due = `${date.getMonth()}/${(date.getDate() + 4).toString()}/${date.getFullYear()}`
            state[idx].date_due = action.dueDate
            console.log("DUE DATE: ", action.dueDate)
            return [
                ...state
            ]
        
        case "SORT_DUE_DATE":
            sortDueDate(state)
            console.log(state)
            return [
                ...state
            ]
        
        case "SORT_DATE_ADDED":
            sortDateAdded(state)
            console.log(state)
            return [
                ...state
            ]
        
        default:
            return state
    }
}
