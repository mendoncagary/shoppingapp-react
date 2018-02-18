import React from 'react';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
  bottom: '50px'
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class TotalDialog extends React.Component {
  state = {
    openDialog: false,
  };

  handleOpen = () => {
    this.setState({openDialog: true});
  };

  handleClose = () => {
    this.setState({openDialog: false});
  };

  
 handleClick(e){
  e.preventDefault();
 this.props.onOpenOrderDetails();
  }



  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div style={customContentStyle}>
        {/* <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen} /> */}
        <Card>
    <CardHeader
      title={this.props.parentContext.state.totalItems}
      subtitle="Subtotal"
    />
    <CardText>
    <h3>${this.props.parentContext.state.totalPrice}{this.props.total}</h3>
    { (this.props.appear)
 ?  <RaisedButton label="Charge" primary={true} style={style} onClick={(e) => this.handleClick(e)}/>:null}

    </CardText>
    
  </Card>
      </div>
    );
  }
}

const style = {
  margin: 15,
 };
