
import React, { Component } from 'react';
import style from '../../style';
import marked from 'marked';


class Order extends Component {
 
constructor(props) {
 super(props);
 this.state= {
 toBeUpdated: false,
 name: '',
 price: ''
 };

 }

rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 
 render() {
 return (
 <div style={ style.comment }>
 <h4>Order ID: {this.props.uniqueID}</h4>
 <h3>Order Address: {this.props.address}</h3>
 <h3>Order Total: {this.props.totalCost}</h3>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 <h4></h4>
 </div>
 )
 }
}

const customStyle = {
    image:{
        width:'40px'
    }
}
export default Order;
