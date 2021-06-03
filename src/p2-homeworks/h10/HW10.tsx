import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loading } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import style from "../../p1-main/m1-ui/u1-app/App.module.css";

function HW10() {
    const dispatch = useDispatch()
    const loadingProcess = useSelector<AppStoreType, boolean>(state => state.loading.loadingProcess)


    const setLoading = () => {
        dispatch(loading(true))
        setTimeout(()=>{
            dispatch(loading(false))
        }, 5000);
    };

    return (
        <div>
            <hr/>
            <span className={style.hw}>#HW10</span>

            {/*should work (должно работать)*/}
            {loadingProcess
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
