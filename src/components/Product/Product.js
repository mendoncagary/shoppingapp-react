//Product.js
import React, { Component } from 'react';
import style from '../../style';
import marked from 'marked';

class Product extends Component {
 
constructor(props) {
 super(props);
 this.state= {
 toBeUpdated: false,
 name: '',
 description: '',
 price: ''
 };

 //binding all our functions to this class
 this.deleteProduct = this.deleteProduct.bind(this);
 this.updateProduct = this.updateProduct.bind(this);
 this.handleNameChange = this.handleNameChange.bind(this);
 this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
 this.handleProductUpdate = this.handleProductUpdate.bind(this);
 this.openProductSheet = this.openProductSheet.bind(this);
 }

 updateProduct(e) {
 e.preventDefault();
 //brings up the update field when we click on the update link.
 this.setState({ toBeUpdated: !this.state.toBeUpdated });
 }

 openProductSheet(e){
e.preventDefault();
let name = this.props.name;
let variants = this.props.variants;
let price = this.props.price;
 this.props.onOpenProductSheet(name,variants,price);
 console.log('oops deleted');
 }
 
 handleProductUpdate(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 //if name or description changed, set it. if not, leave null and our PUT 
 //request will ignore it.
 let name = (this.state.name) ? this.state.name : null;
 let description = (this.state.description) ? this.state.description : null;
 let price = (this.state.price) ? this.state.price : null;
 let product = { name: name, description: description, price: price};
 this.props.onProductUpdate(id, product);
 this.setState({
 toBeUpdated: !this.state.toBeUpdated,
 name: '',
 description: '',
 price: ''
 })
 }

 deleteProduct(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 this.props.onProductDelete(id);
 console.log('oops deleted');
 }

 handleDescriptionChange(e) {
 this.setState({ description: e.target.value });
 }

 handleNameChange(e) {
 this.setState({ name: e.target.value });
 }
 
 handlePriceChange(e) {
    this.setState({ price: e.target.value });
    }
 
rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 
 render() {
 return (
 <div style={ style.comment }>
 <h3>{this.props.name}</h3>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 <a style={ style.updateLink } href='#' onClick={ this.updateProduct }>update</a>
 <a style={ style.deleteLink } href='#' onClick={ this.deleteProduct }>delete</a>
 <a style={ style.updateLink } href='#' onClick={ this.openProductSheet }>buy</a>
 { (this.state.toBeUpdated)
 ? (<form onSubmit={ this.handleProductUpdate }>
 <input
 type='text'
 placeholder='Update name…'
 style={ style.commentFormAuthor }
 value={ this.state.name }
 onChange= { this.handleNameChange } />
 <input
 type='text'
 placeholder='Update your description…'
 style= { style.commentFormText }
 value={ this.state.description }
 onChange={ this.handleDescriptionChange } />
 <input
 type='Number'
 placeholder='Update your price…'
 style= { style.commentFormText }
 value={ this.state.price }
 onChange={ this.handlePriceChange } />
 <input
 type='submit'
 style={ style.commentFormPost }
 value='Update' />
 </form>)
 : null}
 </div>
 )
 }
}

export default Product;
