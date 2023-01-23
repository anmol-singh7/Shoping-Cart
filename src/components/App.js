import React from 'react';
import ProductList from './ProductList';
import '../designs/dropDown.css'

import DropDown from './dropDown';
class App extends React.Component{
    render(){
        return(
            <div>

                
                {/* {console.log('app')} */}
                {/* <div>{'APP above itemm'}</div> */}
                <DropDown/>
                <ProductList/>

                

                
            </div>
        );
    }
};
export default App;