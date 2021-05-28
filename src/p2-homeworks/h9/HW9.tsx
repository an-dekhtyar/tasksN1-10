import React from "react";
import Clock from "./Clock";
import style from "../../p1-main/m1-ui/u1-app/App.module.css"

function HW9() {
    return (
        <div>
            <hr/>
            <span className={style.hw}> #HW9 </span>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    );
}

export default HW9;
