//==============================With using useState hook=====================================

// import React, {useState} from "react";

// const TodoForm: React.FC = () => {

//     const [title, setTitle] = useState<string>("")
    
//     const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(event.target.value)
//     }
//     const keyPressHandler = (event: React.KeyboardEvent) => {
//         if (event.key === "Enter") {
//             console.log(title);
//             setTitle('')
//         }
        

    
// }

//     return (
//         <div className="input-field mt2">
//             <input onKeyPress={keyPressHandler}    onChange={changeHandler} value={title} type="text" id="title" placeholder="Enter todo" />
//             <label htmlFor="title" className="active">Enter todo</label>
//         </div>
//     )
// }
// export default TodoForm;

//===================================================With using useRef hook=====================

import React, { useRef } from "react";

interface TodoFormProps{
    onAdd(title:string):void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref =useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref.current!.value);
            ref.current!.value=""
        }
}

    return (
        <div className="input-field mt2">
            <input onKeyPress={keyPressHandler}
                ref={ref}
                type="text"
                id="title"
                placeholder="Enter todo and press Enter" />
            
            <label htmlFor="title" className="active">Enter todo</label>
        </div>
    )
}