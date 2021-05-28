import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {


    return (
        <div className={s.header}>
                <div className={s.headerContain}>
                        <NavLink to={'/pre-junior'} className={s.headerLink}>Pre Junior</NavLink>
                        <NavLink to={'/junior'} className={s.headerLink}>Junior</NavLink>
                        <NavLink to={'/junior-plus'} className={s.headerLink}>Junior+</NavLink>
                </div>
        </div>
    )
}

export default Header


