export default (state=[],action)=>{
    switch(action.type){
        case "SELCETED_PRODUCT":
            return [...state,action.payload];
        case "REMOVE_PRODUCT":{
            const index = state.indexOf(action.payload);
            if (index >= 0 && state[index].qty > 0) {
                state[index].qty = 1;
            }
            return state.filter((product)=>product.id !==action.payload.id);
        }
        case "INCREMENT":{
            const index=state.indexOf(action.payload);
            if(index>=0){
            state[index].qty +=1;
            }
            // console.log('increment',state);
            return [...state]; 
        }
        case "DECREMENT":{
            const index = state.indexOf(action.payload);
            if (index >= 0 && state[index].qty>1){
            state[index].qty -= 1;
            }
           // console.log('increment', state);
            return [...state]; 
        }
        default:
            return state;
    }
}