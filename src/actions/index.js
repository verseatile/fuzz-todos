export const ADD_TODO = (text, uuid) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: uuid,
            date_added: new Date().toString(),
            date_due: new Date().toString(),
            isComplete: false,
            task: text,
        },
    }
}

export const REMOVE_TODO = (id) => {
    return { type: "REMOVE_TODO", targetId: id }
}


export const CHANGE_COMPLETION = (id) => {
    return { type: "CHANGE_COMPLETION", targetId: id }
}

export const CHANGE_DUE_DATE = (id, dueDate) => {
    return { type: "CHANGE_DUE_DATE", targetId: id, dueDate: dueDate }
}

export const SORT_BY_DUE_DATE = () => {
    return { type: "SORT_DUE_DATE" }
}

export const SORT_DATE_ADDED = () => {
    return { type: "SORT_DATE_ADDED" }
}