import { Todoitem } from "./Todoitem"

export function Todolist({hhff}){
    return(
        <>
        
        {
            hhff.map(el=>
                <div>{el}</div>
            )
        }
        </>
    )
}