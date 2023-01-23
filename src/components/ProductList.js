import React from 'react';
import {connect } from 'react-redux';
import { FetchProducts } from '../actions';
import ProductCard from './ProductCard';

class ProductList extends React.Component{
    componentDidMount()
    {
        this.props.FetchProducts();
    }
    
    render(){
       // console.log("propslist",this.props.List);
        const listtt=this.props.List.map((product)=>
             <ProductCard product={product} key={product.id}/>
        );
        return(
                <div className ='cent' style={{marginLeft:'5vw',backgroundColor:'white'}}>
                      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{listtt}</div>
                </div>
        );
    }
};
//style = {{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
const mapStateToProps=(state)=>{
    //console.log('state',state.List);
   return {List:state.List}
}

export default connect(mapStateToProps,{FetchProducts})(ProductList);