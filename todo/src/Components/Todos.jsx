import { v4 as uuid} from 'uuid'
import { Todoinput } from './Todoinput'
import { Todolist } from './Todolist'
import { useState } from "react"

export function Todos(){
    const [todos,setTodos] = useState([])
    const handleAddTodo = (a)=>{
        setTodos([...todos,a])
    }
    return(
        <div>
            <Todoinput handleAddTodo ={handleAddTodo}/>
            <Todolist hhff={todos}/>
        </div>
    )
}