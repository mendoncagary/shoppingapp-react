//CommentList.js
import React, { Component } from 'react';
import Order from '../Order/Order';
import style from '../../style';

class OrderList extends Component {
 render() {
 let orderNodes = this.props.data.map(order => {
     console.log(order)
 return (
 <Order
 address={ order.customer_address }
 uniqueID={ order['_id'] }
 totalCost={order.totalCost}
 typeOfDelivery={order.typeOfDelivery}
 products={ order.products}
 key={ order['_id'] }>
 { order.name }
 { order.price}
  </Order>
 )
 })
 return (
 <div style={ style.commentList }>
 { orderNodes }
 </div>
 )
 }
}
export default OrderList;