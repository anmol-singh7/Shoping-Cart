export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_PRODUCTS':{
        //     const updatedList = [];
        //    for(var i=0;i<action.payload.length;i++){
        //      var obj=action.payload[i];
        //      Object.assign(obj, { Qty: 1 });     
        //        updatedList.push(obj);
        //    }
        //     return updatedList;


            // const updatedList = action.payload.map((obj) => Object.assign(obj, { qty: 1 }))
            // console.log('newlist', updatedList)
            // return updatedList;

            return action.payload.map((obj) => Object.assign(obj, { qty: 1 }));
            }
            default:
                return state;
         }
}