import { useState } from "react"


export function Todoinput({ handleAddTodo}){

    const [text,setText] = useState("")
    
    
    return(

        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>{
                handleAddTodo(text)}
            }>Add</button>
            
        </div>
    )
}