import React, { useState } from "react";
import {IState as Props } from "../interfaces"

interface IProps{
    people: Props["people"]
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.age || !input.img || !input.name) {
            return   
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note,
                id:0
            }
        ])
        setInput({
            name: "",
            age: "",
            note: "",
            img:""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="number"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image irl"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder="Note"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >Add to list</button>
        </div>
    )
}

export default AddToList;