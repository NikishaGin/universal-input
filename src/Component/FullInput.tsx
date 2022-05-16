import React, {ChangeEvent, useState} from "react";


type FullInputPropsType = {
    addMessage:(title:string)=>void
}

export const FullInput = (props:FullInputPropsType) => {

    let [title,setTitle]=useState('')
    console.log(title)


    const onClickHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const onClickHandlerButton = () => {
        props.addMessage(title)
        setTitle('')
    }

    return(
        <div>
            <input value={title} onChange={onClickHandler}/>
            <button onClick={onClickHandlerButton}>+</button>
        </div>
    )
}