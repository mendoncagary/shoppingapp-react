//CommentList.js
import React, { Component } from 'react';
import Product from '../Product/Product';
import style from '../../style';

class ProductList extends Component {
 render() {
 let productNodes = this.props.data.map(product => {
     
 return (
 <Product
 name={ product.name }
 uniqueID={ product['_id'] }
 price={product.price}
 imgPath={product.imgPath}
 variants={ product.variants}
 onProductDelete={ this.props.ProductDelete }
 onProductUpdate={ this.props.ProductUpdate }
 onOpenProductSheet={ this.props.OpenProductSheet}
 key={ product['_id'] }>
 { product.description }
 { product.price}
  </Product>
 )
 })
 return (
 <div style={ style.commentList }>
 { productNodes }
 </div>
 )
 }
}
export default ProductList;