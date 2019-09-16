// export const sortDueDate = (todos) => {
//     todos.sort((a, b) => {
//         if (a.date_due.year < b.date_due.year) {
//             return a.date_due.year - b.date_due.year
//         }
//         if (a.date_due.year > b.date_due.year) {
//             return b.date_due.year - a.date_due.year
//         }
//         // equal year
//         if (a.date_due.year === b.date_due.year) {
//             if (a.date_due.month < b.date_due.month) {
//                 return a.date_due.month - b.date_due.month
//             }
//             if (a.date_due.month > b.date_due.month) {
//                 return b.date_due.month - a.date_due.month
//             }

//             if (a.date_due.month === b.date_due.month) {
//                 if (a.date_due.day < b.date_due.day) {
//                     return a.date_due.day - b.date_due.day
//                 }
//                 if (a.date_due.day > b.date_due.day) {
//                     return b.date_due.day - a.date_due.day
//                 }
//                 if (a.date_due.day === b.date_due.day) {
//                     return a.date_due.day - b.date_due.day
//                 }
//             }
            
//         }
//         // return todos// no cases matched, so just return
//     })
// }

export const sortDueDate = (todos) => {
    todos.sort((a, b) => {
        return a.date_due - b.date_due
    })
}

export const sortDateAdded = (todos) => {
    todos.sort( (a, b) => a.date_added - b.date_added )
}