import React from 'react';
import {connect } from 'react-redux';
import SelectedList from './selectedList';
import '../designs/dropDown.css';

class DropDown extends React.Component {
    render (){
        return (
            
            <div className="dropdown " style={{left:'90%'}}>
                <button className='dropbtn ' style={Styles.cartIconContainer}>
                    <img alt="" src="https://cdn-icons-png.flaticon.com/512/3737/3737173.png" height='auto' width='50px'/>
                    <span style={Styles.cartCount}><span style={{color:'black'}}>{this.props.count}</span></span>
                </button>
                <div className='scroll-container'>
                <div className="dropdown-content " style={{border:'1px solid grey',padding:'5px'}}>
                    <SelectedList/>
                </div>
                </div>
                
            </div>
           
        );
    }

};
const Styles = {
    cartIconContainer: {
        position: 'relative',
        marginRight: 25
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};
const mapStateToProps=(state)=>{
    return { count: state.selectedProducts.length }
}
export default connect(mapStateToProps)(DropDown);