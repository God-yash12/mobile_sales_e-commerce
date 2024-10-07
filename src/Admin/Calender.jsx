import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/Calendar.css"



const Calender = ()=> {

    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate)
    };

    return (
        <>
        <div className="ml-10">
                <p className="mt-10 mb-10 font-semibold underline"> Today Date is: {date.toDateString()}</p>
            <div>
                <Calendar
                onChange = {handleDateChange}
                value = {date} />
            </div>
        </div>
        </>
    )
}

export default Calender;