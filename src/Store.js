//Store.js
import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList/ProductList';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import TopNavBar from './components/TopNavBar/TopNavBar';
import style from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import BottomSheet from 'material-ui-bottom-sheet/lib/components/BottomSheet/BottomSheet';
import BottomProductSheet from './components/BottomProductSheet/BottomProductSheet';
import TotalDialog from './components/TotalDialog/TotalDialog';


class Store extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [], isOpen: false, productName: [], productVariants: [],productPrice: 0,cartItems:[],totalItems: 0,totalPrice:0 };
 this.loadProductsFromServer = this.loadProductsFromServer.bind(this);
 this.handleProductSheet = this.handleProductSheet.bind(this);
 this.CloseSheet = this.CloseSheet.bind(this);
 }

 handleProductSheet(name,variants,price) {
    this.setState({isOpen:true});
    this.setState({productName : name,productVariants: variants,productPrice: price});
    }

    CloseSheet(){
        this.setState({isOpen:false});
    }

 loadProductsFromServer() {
 axios.get(this.props.url)
 .then(res => {
 this.setState({ data: res.data });
 })
 }
 
 componentDidMount() {
 this.loadProductsFromServer();
 setInterval(this.loadProductsFromServer, this.props.pollInterval);
 }
 render() {
 return (
 
<div>
<MuiThemeProvider>
  <div>
  <TopNavBar/>
  <div style={ style.commentBox }>
 <h2 style={ style.title }>Products:</h2>
 <ProductList data={ this.state.data } OpenProductSheet ={this.handleProductSheet}/>
 </div>
    <BottomProductSheet parentContext={this} productName={this.state.productName} productPrice={this.state.productPrice} productVariants ={this.state.productVariants} OpenSheet ={this.state.isOpen} CloseSheet ={this.CloseSheet}/>
    <BottomNavbar checkoutItems={this.state.cartItems} parentContext={this} appContext = {this.props.appContext}/>
 </div>
 { (this.state.totalItems)
 ? <TotalDialog parentContext={this}/>:null}

 </MuiThemeProvider>
 

</div>
 )
 }
}
export default Store;
