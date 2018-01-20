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



class Cart extends Component {
 constructor(props) {
 super(props);
 }

 
 render() {
    let cartNodes = this.props.checkoutItems.map(items => {
         return (
             <div>
         <ListItem primaryText={items.name} id={items['_id']} secondaryText= {'$'+items.price} />
         <Divider />
         </div>
         )
         })
console.log(this.props.checkoutItems);
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
 
 </MuiThemeProvider>
 

</div>
 )
 }
}
export default Cart;
