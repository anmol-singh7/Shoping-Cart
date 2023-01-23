import { combineReducers } from 'redux';
import ProductList from './productList';
import selectedProducts from './selectedItems';

export default combineReducers({
    List: ProductList,
    selectedProducts :selectedProducts
});