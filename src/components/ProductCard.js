import React from 'react';
import { connect } from 'react-redux';
import { SelectedProducts } from '../actions';
import "../designs/productCard.css";

class ProductCard extends React.Component{

     check=(product)=>{
        const p=this.props.selected.find((pro)=>pro.id===product.id );
        
        if(p===undefined){
            // product.Qty = 1;
            this.props.SelectedProducts(product);
        }
     }

    render(){
        
        return(
            <div >
                <div className="card">
                    <div style={{ marginTop: '3vh' }}>
                        <img alt="" src={this.props.product.image} height='150rem' width='150rem' />
                    </div>

                    <div className='card-title'>
                        {this.props.product.category}
                    </div>
                    <div className='price'>
                        ${this.props.product.price}
                    </div>
                    <div className="cartt" onClick={() =>  this.check(this.props.product)}>
                        Add To Cart
                    </div>
                  
                </div>
            </div>
        );
    }
};
const mapStateToProps=(state)=>{
    //  console.log('selectef', state.selectedProducts)
    return { selected: state.selectedProducts }
}

export default connect(mapStateToProps, { SelectedProducts } )(ProductCard);