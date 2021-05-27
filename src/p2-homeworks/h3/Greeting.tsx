import React, {ChangeEvent} from "react";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""; // need to fix with (?:)

    return (
        <span className={s.contain}>
            <span>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} error={error}/>
            </span>
            <span>
            <SuperButton disabled={!!error} onClick={addUser}>Add</SuperButton>
            </span>
            <span className={s.user}>{totalUsers}</span>


        </span>
    );
}

export default Greeting;
