import React, { Component } from 'react';

import { BottomSheet } from 'material-ui-bottom-sheet'
import { List, ListItem, Subheader, Divider } from 'material-ui'
 

class BottomProductSheet extends Component {

    

    constructor(props) {
        super(props);
        this.state= {
        };
        

        //binding all our functions to this class
        this.ChooseVariants = this.ChooseVariants.bind(this);
    } 

    ChooseVariants(e){
        e.preventDefault();
        let product =[];
        product["name"] = this.props.productName;
        product["price"] = this.props.productPrice;
    this.props.parentContext.setState({totalItems :this.props.parentContext.state.totalItems+1 });
    //var count = this.props.parentContext.state.totalItems -1;
    this.props.parentContext.setState({totalPrice :this.props.parentContext.state.totalPrice+ this.props.parentContext.state.productPrice});
    this.props.parentContext.state.cartItems.push(product);
    this.props.parentContext.setState({cartItems: this.props.parentContext.state.cartItems});
    }
    
render() {
    let variantsNodes = this.props.productVariants.map(variants => {
        return (
        <ListItem onClick={this.ChooseVariants} primaryText={variants.variations} id={variants['_id']} secondaryText= {'$'+this.props.productPrice} />
        )
        })


  return(
    <div>
        <BottomSheet
            open={this.props.OpenSheet}
            onRequestClose={this.props.CloseSheet}

        >   
        
            <h2 style={{marginLeft: 72, marginTop: 40}}>{this.props.productName}</h2>
            <Subheader>Select a variant below</Subheader>
         
            <Divider inset/>
            <List>
            {variantsNodes}
            </List>
        </BottomSheet>
    </div>
  )
}
}

export default BottomProductSheet;