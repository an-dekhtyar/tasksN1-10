import React from 'react'
import classes from './Message.module.css'

type MessageDataType = {
    name: string
    message: string
    avatar: string
    time: string
}


const Message = (props: MessageDataType) => {
    return (
        <div className={classes.messageBuild}>
            <img src={props.avatar} className={classes.avatar}/>

            <div className={classes.tre}></div>

            <div className={classes.messageContanier}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.messageText}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
