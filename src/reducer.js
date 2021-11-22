
const storeInit={name:'santhosh',age:21}

 const reducer=(state=storeInit,action)=>{

    switch(action.type){
        case 'Name':
            return{...state,name:action.name};
        default:
            return state;
    }
}

export default reducer