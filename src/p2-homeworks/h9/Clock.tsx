import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date);
    const [show, setShow] = useState<boolean>(false);
    const [view, setView] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        setView(true)
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };


    const stringTime = `${date.getHours() >= 10 ? date.getHours() :'0'+ date.getHours()}:${date.getMinutes() >= 10 ? date.getMinutes(): '0'+ date.getMinutes()}:${date.getSeconds() >= 10 ? date.getSeconds(): '0'+date.getSeconds()}`; // fix with date
    const stringDate = `${date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()}:${date.getMonth() >= 9 ? date.getMonth() + 1: '0' + (date.getMonth() + 1)}:${date.getFullYear()}`; // fix with date

    return (
        <div>
            {view
                ? <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{stringTime}</div>
                : <div>&nbsp;</div>
            }
            {show
                ? <div>{stringDate}</div>
                : <div>&nbsp;</div>
            }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
