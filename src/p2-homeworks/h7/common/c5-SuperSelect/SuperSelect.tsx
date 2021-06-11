import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './superSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o,i) => {
        return (
            <option key={i} selected={o === restProps.value} value={o}>{o}</option>
        )
    }) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.target.value)

        // onChange, onChangeOption
    }

    return (
        <select style={{width:'70px'}} onChange={onChangeCallback} {...restProps} className={s.superSelect}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
