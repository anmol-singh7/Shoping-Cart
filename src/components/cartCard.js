import React from 'react';
import {connect} from 'react-redux';
import { Remove, Increment, Decrement }  from '../actions'
//import Inc from './inc';
import "../designs/cartCard.css";

class CartCard extends React.Component{
    render(){
        const choosen  = this.props.cartproduct;
       
    return(
        
        <div className="Cart-Items" style={{width:'40vw',paddingRight:'1vw'}}>
            <div className="image-box">
                <img alt="" src={choosen.image} style={{ height:"120px" ,maxWidth:'8vw'}} />
            </div>
            <div className="about">
                <h1 className="title" >{choosen.category}</h1>
                <h3 className="subtitle"><span style={{ marginRight: '4vh' }}>Rating  </span>{choosen.rating.rate}/5</h3>
                <img alt="" src="images/veg.png" style={{ height:"30px" }} />
            </div>
            <div className="counter">
                <div className="btn" onClick={() => this.props.Increment(choosen)}><img alt="" src="https://cdn-icons-png.flaticon.com/512/9055/9055025.png" height="auto" width="32px"/></div>
                <div className="count" style={{paddingLeft:'8px',paddingRight:'8px'}}>{this.props.Qty}</div>
                <div className="btn" onClick={() => this.props.Decrement(choosen)}><img alt="" src="https://cdn-icons-png.flaticon.com/512/6048/6048314.png" height="auto" width="32px" /></div>
            </div>
            <div className="prices">
                <div className="amount">${choosen.price}</div>
                <div className="save"><u>Save for later</u></div>
                <div className="remove" onClick={() => this.props.Remove(choosen)}><u>Remove</u></div>
            </div>
        </div>
          );
    }

};
const mapStateToProps=(state,ownProps)=>{
    //console.log('inc', state.selectedProducts)
    return { Qty: state.selectedProducts.find((prod)=>prod.id===ownProps.cartproduct.id).qty }
}
export default connect(mapStateToProps, { Remove, Increment, Decrement })(CartCard);