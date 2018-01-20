import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Cart from '../Cart/Cart';

const checkoutIcon = <FontIcon className="material-icons">Checkout</FontIcon>;
const orderIcon = <FontIcon className="material-icons">Orders</FontIcon>;
const storeIcon = <IconLocationOn />;

class BottomNavbar extends Component {
  state = {
    selectedIndex: 2,
  };

  select = (index) => {
    this.setState({selectedIndex: index});
    if(index==0){
      var uploadScreen =[]
      uploadScreen.push(<Cart checkoutItems={this.props.checkoutItems} parentContext={this.props.parentContext}/>)
      this.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  

    }
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
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