import React from 'react';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
  position: 'fixed',
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
    <CardText>{this.props.parentContext.state.totalPrice}
      
    </CardText>
  </Card>
      </div>
    );
  }
}
