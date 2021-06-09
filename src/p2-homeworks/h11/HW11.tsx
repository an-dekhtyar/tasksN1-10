import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from './HW11.module.css'
import titleStyle from "../../p1-main/m1-ui/u1-app/App.module.css"

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const [value,rangeSetValue] = useState([value1, value2])
    const rangeOnchangeHandler = [setValue1, setValue2]
    const onChange = (state:number[]) => {
        setValue1(state[0])
        setValue2(state[1])
        rangeSetValue([...state])
    }

    return (
        <>
            <span className={titleStyle.hw}>#HW11</span>
        <div className={style.hw11block}>


            {/*should work (должно работать)*/}
            <div className={style.slider}>
                <div className={style.value}>{value1}</div>
                <div className={style.inputWidth}>
                <Slider className={style.inputWidth} value={value1} onChange={setValue1}/>
                </div>
            </div>

            <div className={style.range}>
                <div className={style.value}>{value1}</div>
                <div className={style.inputWidth}>
                    <Range defaultValue={value} onChange={onChange} />
                </div>
                <div className={style.value}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
        </>
            );
}

export default HW11;
