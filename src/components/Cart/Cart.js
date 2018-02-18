//Cart.js
import React, { Component } from 'react';
import axios from 'axios';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import TotalDialog from '../../components/TotalDialog/TotalDialog';
import style from '../../style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { List, ListItem, Subheader, Divider } from 'material-ui'
import OrderDetails from '../OrderDetails/OrderDetails';



class Cart extends Component {
 constructor(props) {
 super(props);
 this.state = {
    openOrderDetails: false,
    orderPlaced: true
 
 }
 this.handleOrderDetails = this.handleOrderDetails.bind(this);

 }

handleUploadScreen(){
    //this.props.parentContext.handleUploadScreen(uploadScreen);
}

 handleOrderDetails() {
    this.setState({openOrderDetails:true});
    }

 render() {
     let cartNodes = null
    if(this.props.checkoutItems)
    {
        let cartNodes = this.props.checkoutItems.map(items => {
         return (
             <div>
         <ListItem primaryText={items.name} id={items['_id']} secondaryText= {'$'+items.price} />
         <Divider />
         </div>
         )
         })
console.log(this.props.checkoutItems);
        }
 return (
 
<div>
<MuiThemeProvider>
  <div>
  <TopNavBar/>
  <div style={ style.commentBox }>
 <h2 style={ style.title }>Cart:</h2>
 </div>
 
            <List>
            <Divider />
            {cartNodes}
            </List>
 
 
 </div>
 
 <TotalDialog appear={true} total={this.props.total} parentContext={this} onOpenOrderDetails = {this.handleOrderDetails} />
 { (this.state.openOrderDetails) ? <OrderDetails total={this.props.total} onUploadScreen={this.handleUploadScreen} parentContext={this} username={this.props.username}/>:null}

 <BottomNavbar selectedIndex={0} orderPlaced={this.state.orderPlaced} parentContext={this} appContext = {this.props.appContext}/>
 
 </MuiThemeProvider>
 

</div>
 )
 }
}
export default Cart;
