
const redux =require("redux")

//console.log(redux) ;

//state
const initState={
    num:0
}

//Reducer
const rootReducer =(state=initState,action )=>{
    if (action.type==="Inc_Number"){
        return {
            ...state,
            num:state.num+2
        }
    }

    if (action.type==="Add_Number"){
        return {
            ...state,
            num:state.num +action.value
        }
    }

    return state;
}

//Store
const store =redux.createStore(rootReducer);
console.log(store.getState())

//Subscribe
store.subscribe(()=>{
    console.log("Subscribe",store.getState())
})

//Dispatching Action

store.dispatch({
    type:"Inc_Number"
})

store.dispatch({
    type:"Add_Number",
    value:26,
})

