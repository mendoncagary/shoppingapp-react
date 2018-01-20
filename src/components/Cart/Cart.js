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
    let cartNodes = this.props.productVariants.map(variants => {
        return (
        <ListItem onClick={this.ChooseVariants} primaryText={variants.variations} id={variants['_id']} secondaryText= "99" />
        )
        })

 return (
 
<div>
<MuiThemeProvider>
  <div>
  <TopNavBar/>
  <div style={ style.commentBox }>
 <h2 style={ style.title }>Cart:</h2>
 </div>
 <TotalDialog/>
 </div>
 
 </MuiThemeProvider>
 

</div>
 )
 }
}
export default Cart;
