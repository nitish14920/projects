import { useState } from "react"
import {v4 as uuid} from "uuid"


export function Todoinput({ handleAddTodo}){

    const [text,setText] = useState("")
    
    
    return(

        <form>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={(e)=>{
                e.preventDefault()
                const payload = {
                    id:uuid(),
                    title:text,
                    status:false,
                }
                handleAddTodo(payload)
                setText("")
            }
                
            }>Add</button>
            
        </form>
    )
}