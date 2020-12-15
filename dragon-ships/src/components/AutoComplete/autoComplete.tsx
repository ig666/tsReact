import React, { useState } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    onSelect?: (value: string) => void,
    filterChange?:(value: string,option:string[]) => void,
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
    const [value,setvalue]=useState('')
    const option = ['long', 'qi', '@12']
    const { onSelect,filterChange } = props
    const filterOption=(value:string)=>{
        if(filterChange){
            let str=filterChange(value,option)
            console.log(str,value,'value====>>>')
            setvalue(value)
        }
    }
    return (
        <Input value={value} onChange={(e)=>{filterOption(e.target.value)}}></Input>
    )
}