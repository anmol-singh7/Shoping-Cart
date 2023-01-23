
import product from '../Api/api';
export const FetchProducts  =()=>
{
    return async function(dispatch,getstate)
    {
        const response = await product.get('products');
        console.log("res",response.data)
        dispatch({ type:'FETCH_PRODUCTS',payload:response.data})
    }

}
export const SelectedProducts=(product)=>
{
    return{
        type:"SELCETED_PRODUCT",
        payload:product
    }
}
export const Remove =(product)=>{
    return{
        type:"REMOVE_PRODUCT",
        payload:product
    }
}
export const Increment=(product)=>{
      return{
        type:"INCREMENT",
        payload:product
      }
}
export const Decrement=(product)=>{
    return{
        type: "DECREMENT",
        payload:product
    }
}