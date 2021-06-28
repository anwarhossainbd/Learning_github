const  redux =require("redux");

// console.log(redux) ;

//State
const initState ={
     num:0
}

//Reducer

const rootReducer =(state=initState,action)=>{
    if (action.type=== "INC_num"){
         return {
             ...state ,
             num:state.num+1
         }
    }

    if (action.type==="Add_Number"){
        return {
            ...state ,
            num:state.num+action.a
        }
    }

    return state ;
}


//Store
const store = redux.createStore(rootReducer) ;
console.log(store.getState())

//Subscribe
store.subscribe(()=>{
    console.log("Subscribe ", store.getState())
})

//Dispatching Action

store.dispatch({
    type: 'INC_num'
})

store.dispatch({
    type:'Add_Number',
    a:34 ,
})





