import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    const priority = {
        color:props.affair.color
    }

    return (
        <div className={s.list}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.priority} style={priority}>[{props.affair.priority}]</div>
            <SuperButton className={s.buttonDelete} red onClick={deleteCallback}>Delete</SuperButton>

        </div>
    )
}

export default Affair
