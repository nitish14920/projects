import { useState } from "react";

 function Todo(){
    const [name,setName] = useState([])
    return (
        <>
        <h1>Enter Name:{name}</h1>
        <input type="text" placeholder="Enter Name" />
        </>
    )
}

export default Todo;