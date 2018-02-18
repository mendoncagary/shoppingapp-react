//Product.js
import React, { Component } from 'react';
import style from '../../style';
import marked from 'marked';

const api = "https://shoppingapp-api.herokuapp.com/uploads/"
class Product extends Component {
 
constructor(props) {
 super(props);
 this.state= {
 toBeUpdated: false,
 name: '',
 description: '',
 price: ''
 };

 this.openProductSheet = this.openProductSheet.bind(this);
 }

 openProductSheet(e){
e.preventDefault();
let name = this.props.name;
let variants = this.props.variants;
let price = this.props.price;
 this.props.onOpenProductSheet(name,variants,price);
 console.log('oops deleted');
 }
 
rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 
 render() {
 return (
 <div style={ style.comment }>
 <h3>{this.props.name}</h3>
 <img style={customStyle.image} src={api+this.props.imgPath}/>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 <a style={ style.updateLink } href='#' onClick={ this.openProductSheet }>buy</a>
 </div>
 )
 }
}

const customStyle = {
    image:{
        width:'40px'
    }
}
export default Product;
