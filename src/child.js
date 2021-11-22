import React from "react";

import {useSelector,useDispatch} from 'react-redux';

export default function Child(){
    const nameUpdate=useDispatch()
    const name=useSelector(state=>state.name)

    const click=()=>{
        nameUpdate({type:'Name',name:'kumar'})
    }
    return (
        <div>
            <h1> 
                hello {name}
            </h1>
            <button onClick={()=>click()}>click me</button>
        </div>
    )
}