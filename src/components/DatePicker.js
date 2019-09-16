import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { GeneralBtn, ItemControls, TodoText, Todo } from "../styles"
import Text from "./Text"

// modal for date picker
const DatePicker = ({toggleModal, dueDate, id}) => {
    const [date, setDate] = React.useState(0)
    document.body.style.overflowY = "hidden"
    
    // split due date
    // let [year, month, day] = date.split("-")
    // if (month < 10) {
    //     month = month[1]
    // }
    // console.log(year)
    // compare date from picker

    const sortDates = () => {

    }

    //     return <AnimatePresence>
    //     <motion.div initial={{ opacity: 0}}
    //             animate={{ opacity: 1 }} id="modal" style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", position: 'absolute', height: '100%', width: "100%", background: "rgba(0,0,0,0.5)",zIndex: 1000, top: 0 }}>
    //         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", height: 300, width: "50%", background: "#FFF" }}>
    //             <Text type="h2" family="Roboto" align="center">SET DATE</Text>
    //             <input style={{ width: "100%" }} onChange={(e) => setDate(e.target.value)} type="date" min="" defaultValue={""} />
    //             <Text type="h2" family="Roboto" align="center">{date}</Text>


    //             <GeneralBtn onClick={() => {dueDate(id, { year, month, day }); toggleModal(false); document.body.style.overflowY = "scroll"}}>Set Due Date</GeneralBtn>
    //             <GeneralBtn onClick={() => {toggleModal(false); document.body.style.overflowY = "scroll"}}>Cancel</GeneralBtn>
    //         </div>
    // </motion.div>
    // </AnimatePresence>

    return <AnimatePresence>
        <motion.div initial={{ opacity: 0}}
                animate={{ opacity: 1 }} id="modal" style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", position: 'absolute', height: '100%', width: "100%", background: "rgba(0,0,0,0.5)",zIndex: 1000, top: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", height: 300, width: "50%", background: "#FFF" }}>
                <Text type="h2" family="Roboto" align="center">How many days from now?</Text>

                <div style={{ display: 'flex' }}>
                    <GeneralBtn style={{ height: 60, width: 60 }} onClick={() => setDate(1)}>1</GeneralBtn>
                    <GeneralBtn style={{ height: 60, width: 60 }} onClick={() => setDate(2)}>2</GeneralBtn>
                    <GeneralBtn style={{ height: 60, width: 60 }} onClick={() => setDate(3)}>3</GeneralBtn>
                </div>

                <Text type="h2" family="Roboto" align="center">{!date ? 1 : date}</Text>


                {/* <GeneralBtn onClick={() => {dueDate(id, { year, month, day }); toggleModal(false); document.body.style.overflowY = "scroll"}}>Set Due Date</GeneralBtn> */}
                <GeneralBtn onClick={() => {dueDate(id, date); toggleModal(false); document.body.style.overflowY = "scroll"}}>Set Due Date</GeneralBtn>
                <GeneralBtn onClick={() => {toggleModal(false); document.body.style.overflowY = "scroll"}}>Cancel</GeneralBtn>
            </div>
    </motion.div>
    </AnimatePresence>
    
    
}

export default DatePicker