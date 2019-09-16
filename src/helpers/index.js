export const sortDueDate = (todos) => {
    todos.sort((a, b) => {
        return a.date_due - b.date_due
    })
}

export const sortDateAdded = (todos) => {
    todos.sort( (a, b) => a.date_added - b.date_added )
}