import React from 'react'
import image404 from '../404.png'
import style from './Error404.module.css'

function Error404() {

    const image = {
        backgroundImage:`url(${image404})`
    }

    return (
        <div className={style.pagSize} style={image}/>
    )
}

export default Error404
