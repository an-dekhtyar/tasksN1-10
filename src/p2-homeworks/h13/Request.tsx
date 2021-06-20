import React, { ChangeEvent, useState } from "react";
import style from './HW13.module.css'

export const Request = (props:RequestPropsType) => {
    
    const {onCkickRequestSend, response} = props
    
    const [checked, setChecked] = useState<boolean>(false)

    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <div className={style.HW13}>
            <input checked={checked} type='checkbox' onChange={checkboxHandler} />
            <button onClick={()=>{onCkickRequestSend(checked)}}>Send Request</button>
            <div className={style.response}>
                {response}
            </div>
        </div>
    )
}

export type RequestPropsType = {
    onCkickRequestSend:(success:boolean) => void
    response: string
}