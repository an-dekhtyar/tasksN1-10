import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onClickHandler = () => { setCollapsed(!collapsed) }

    return (
        <div>
            {collapsed
                ?
                <div className={s.headerContain}>
                    <div className={s.headerBox} onClick={onClickHandler}>
                        <div className={s.headerLink}>Select Level</div>
                    </div>
                </div>
                :
                <div className={s.headerContain}>
                    <div className={s.headerBox} onClick={onClickHandler}>
                        <div className={s.headerLink}>Select Level</div>
                    </div>

                    <div className={s.headerBox}>
                        <NavLink to={'/pre-junior'}>
                            <div className={s.headerLink}>Pre Junior</div>
                        </NavLink>
                    </div>
                    <div className={s.headerBox}>
                        <NavLink to={'/junior'}>
                            <div className={s.headerLink}>Junior</div>
                        </NavLink>
                    </div>
                    <div className={s.headerBox}>
                        <NavLink to={'/junior-plus'}>
                            <div className={s.headerLink}>Junior+ </div>
                        </NavLink>
                    </div>
                </div>
            }



        </div>
    )
}

export default Header


