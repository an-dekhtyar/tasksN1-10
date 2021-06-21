import React, { useState } from "react";
import titleStyle from "../../p1-main/m1-ui/u1-app/App.module.css"
import {requestAPI} from "./requestApi"
import {Request} from "./Request"

export const HW13 = () => {

    const [response, setResponse] = useState('')

    const onClickRequestSend = (success:boolean) => {
        requestAPI.sendRequest(success)
        .then(res => setResponse(res.data.errorText))
        .catch(err => {
            err.response ? setResponse(err.response.data.errorText) : setResponse(err.message)
        })
    }

    return (
        <div>
            <span className={titleStyle.hw}>#HW13</span>

            <Request onCkickRequestSend={onClickRequestSend} response={response}/>

        </div>
    )
}


