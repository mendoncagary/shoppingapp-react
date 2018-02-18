import React from 'react';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Orders from '../Orders/Orders';
import MenuItem from 'material-ui/MenuItem';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton
} from 'material-ui/Stepper';


const getStyles = () => {
  return {
    root: {
      width: '100%',
      maxWidth: 700,
      margin: 'auto',
    },
    content: {
      margin: '0 16px',
    },
    actions: {
      marginTop: 12,
    },
    backButton: {
      marginRight: 12,
    },
  };
};


export default class OrderDetails extends React.Component {
    
    state = {
      stepIndex: null,
      visited: [],
      name: '',
      totalCost: '',
      typeOfDelivery: '',
      address: ''
    };
  
    
 handleClick(event){
    var apiBaseUrl = "https://shoppingapp-api.herokuapp.com/api/";
    var self = this;
    var payload={
      "id":this.props.username,
    "name":this.state.name,
    "totalCost":this.props.total,
    "address": this.state.address,
    "typeOfDelivery": this.state.typeOfDelivery
    }
    axios.post(apiBaseUrl+'orders', payload)
    .then(function (response) {
    console.log(response);
    if(response.status == 200){
    console.log("Order successfull");
    var uploadScreen=[];
    uploadScreen.push(<Orders appContext={self.props.appContext} url='https://shoppingapp-api.herokuapp.com/api/orders/' pollInterval={2000}/>)
    //self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    self.props.onUploadScreen(uploadScreen)
      }
    else if(response.status == 204){
    console.log("Order could not be places");
    alert("Order could not be places")
    }
    else{
    console.log("Order unsuccessful");
    alert("Order unsuccessful");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }

    componentWillMount() {
      const {stepIndex, visited} = this.state;
      this.setState({visited: visited.concat(stepIndex)});
    }
  
    componentWillUpdate(nextProps, nextState) {
      const {stepIndex, visited} = nextState;
      if (visited.indexOf(stepIndex) === -1) {
        this.setState({visited: visited.concat(stepIndex)});
      }
    }
  
    handleNext = () => {
      const {stepIndex} = this.state;
      if (stepIndex < 3) {
        this.setState({stepIndex: stepIndex + 1});
      }
      if(stepIndex ==2)
      {
        this.handleClick();
      }
    };
  
    handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
      }
    };
  
    getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return <TextField hintText='John Doe' floatingLabelText='Full Name' onChange = {(event,newValue) => this.setState({name:newValue})}/>;
        case 1:
          return  <TextField hintText='Address' multiLine={true} rows={2} rowsMax={4} onChange = {(event,newValue) => this.setState({address:newValue})}/>;
        case 2:
          return  <SelectField floatingLabelText='Type of Payment' onChange = {(event,newValue) => this.setState({typeOfDelivery:newValue})}><MenuItem value={1} primaryText='Cash on Delivery' /><MenuItem value={2} primaryText='Debit Card/Credit Card' /><MenuItem value={3} primaryText='NetBank' /></SelectField>;
        case 3:
          return <h3>Your Order has been placed. Thanks for shopping with us.</h3>;
          default:
          return 'Click a step to get started.';
      }
    }
  
    render() {
      const {stepIndex, visited} = this.state;
      const styles = getStyles();
  
      return (
        <div style={styles.root}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: null, visited: []});
              }}
            >
              Cancel Checkout
            </a>
          </p>
          <Stepper linear={false} orientation="vertical">
            <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
              <StepButton onClick={() => this.setState({stepIndex: 0})}>
                Fill out your details
              </StepButton>
            </Step>
            <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
              <StepButton onClick={() => this.setState({stepIndex: 1})}>
                Adress Details
              </StepButton>
            </Step>
            <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
              <StepButton onClick={() => this.setState({stepIndex: 2})}>
                Pay Amount
              </StepButton>
            </Step>
          </Stepper>
          <div style={styles.content}>
            <p>{this.getStepContent(stepIndex)}</p>
            {stepIndex !== null && (
              <div style={styles.actions}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={styles.backButton}
                />
                <RaisedButton
                  label="Next"
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            )}
          </div>
        </div>
      );
    }
  }
  