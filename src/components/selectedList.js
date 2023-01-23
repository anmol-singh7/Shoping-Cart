import React from 'react';
import {connect } from 'react-redux';
import {SelectedProducts } from '../actions'
import CartCard from './cartCard';
import "../designs/cartCard.css";

class SelectedList extends React.Component {
   
    getTotal = () => {
        let cartTotal = 0;
        const products=this.props.cartProduct;
        products.map((product)=>{
            cartTotal+=product.price*product.qty;
        })
        let int = Math.trunc(cartTotal);//to restrict answer upto two decimal place
        let deci = cartTotal-int;
        deci*=100;
        deci = Math.trunc(deci);
        deci/=100;

        return int +deci;
    }
    render(){
        const cartList=this.props.cartProduct.map((cartproduct)=>
            <div style={{ marginBottom: '4px' }}>  
            <CartCard  cartproduct={cartproduct} key={cartproduct.id} />
           </div>
        );
        return(
            <div> 
                <div>{cartList}</div>
                {this.props.cartProduct.length>0 ?
                    <div className="Cart-Items" style={{ height: "120px" ,width:'40vw',color:'white'} }>
                        <div style={Style }>Total</div>
                        <div style={Style}>$ {this.getTotal()}</div>
                    </div>
                    :
                   <span></span>
                    }
            </div>
        );
    }
};
const Style={
    fontFamily: 'Open Sans',
    fontWeight: 800, 
    color: '#202020', 
    fontSize: '2.6rem',
      paddingLeft:'1vw',
    paddingRight:'1vw'
}
const mapStateToProps=(state)=> {
    return {cartProduct: state.selectedProducts};
}
export default connect(mapStateToProps,{SelectedProducts})(SelectedList);