import React from "react";
import s from "./HW12.module.css";
import titleStyle from "../../p1-main/m1-ui/u1-app/App.module.css"
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, StateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'yellow', 'blue' ,'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeTheme = (value:string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s.hw12}>
            <span className={titleStyle.hw}>#HW12</span>
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                Text example
            </span>

            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeTheme}
            />

            <hr/>
        </div>

        </div>);
}

export default HW12;
