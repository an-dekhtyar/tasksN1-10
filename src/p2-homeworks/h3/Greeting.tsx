import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""; // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={error} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>Title is requared!</div>}

        </div>
    );
}

export default Greeting;
