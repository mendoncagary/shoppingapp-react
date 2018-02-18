import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
const checkoutIcon = <FontIcon className="material-icons">Checkout</FontIcon>;
const orderIcon = <FontIcon className="material-icons">Orders</FontIcon>;
const storeIcon = <IconLocationOn />;

class BottomNavbar extends Component {
  state = {
    selectedIndex: 2,
    username:this.props.parentContext.state.username,
    orderPlaced: this.props.orderPlaced
  };

  handleUploadScreen(){
    //this.props.appContext.setState({uploadScreen:uploadScreen})

  }
  select = (index) => {
    this.setState({selectedIndex: index});
    if(index==0){
      var uploadScreen =[]
      uploadScreen.push(<Cart total={this.props.total} username={this.state.username} checkoutItems={this.props.checkoutItems} parentContext={this.props.parentContext}/>)
      if(this.props.appContext)
      
      this.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  

    }
    else if(index==1){
      var uploadScreen =[]
      uploadScreen.push(<Orders url='https://shoppingapp-api.herokuapp.com/api/orders/' pollInterval={2000} parentContext={this.props.parentContext}/>)
      if(this.props.appContext)
      this.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  

    }
  }

  render() {

    return (
      
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.props.selectedIndex}>
          <BottomNavigationItem
            label="Checkout"
            icon={checkoutIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Orders"
            icon={orderIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Store"
            icon={storeIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavbar;