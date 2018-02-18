import React from 'react';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import BottomNavbar from '../BottomNavbar/BottomNavbar';
import TopNavBar from '../TopNavBar/TopNavBar';
import style from '../../style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OrderList from '../OrderList/OrderList';


export default class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadOrdersFromServer = this.loadOrdersFromServer.bind(this);
        }
    
    loadOrdersFromServer() {
        axios.get(this.props.url)
        .then(res => {
        this.setState({ data: res.data });
        })
        }

 componentDidMount() {
    this.loadOrdersFromServer();
    setInterval(this.loadOrdersFromServer, this.props.pollInterval);
    }
  
    

    
    render() {
      return (
        <div>
        <MuiThemeProvider>
          <div>
          <TopNavBar/>
          <div style={ style.commentBox }>
         <h2 style={ style.title }>Orders:</h2>
         <OrderList data={ this.state.data }/>
         </div>
            <BottomNavbar selectedIndex={1} parentContext={this} appContext = {this.props.appContext}/>
         </div>
         
         </MuiThemeProvider>
         
        
        </div>
      );  
    }
  }
  