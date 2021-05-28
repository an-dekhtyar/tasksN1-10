import React from 'react'
import Message from "./Message";
import style from '../../p1-main/m1-ui/u1-app/App.module.css'

const messageData = {
    avatar: 'https://i.pinimg.com/236x/3d/f8/fd/3df8fd1016697c83283034d6cfb4bcc8--sports-art-draw.jpg',
    name: 'Anton',
    message: "I\'ll learn React one day!",
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <span className={style.hw}>#HW1</span>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
