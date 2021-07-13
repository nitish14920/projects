import { Todoitem } from "./Todoitem"

export function Todolist({hhff}){
    return(
        <>
        
        {
            hhff.map(el=>
                <div key={el.id}>
                <h3 >{el.title}</h3>
                Status:{`${el.status}`}
                </div>
                
            )
        }
        </>
    )
}