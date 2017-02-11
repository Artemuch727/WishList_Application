/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Dialog from 'material-ui/Dialog';
import update from 'react-addons-update';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class DialogPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:{
        id:'',
        name:'',
        descr:''
      },
    }
  }

  handleChange = (event) => {
    var list, fType = event.target.name;
    switch (fType) {
      case 'l_id':
        list = update(this.state.list, {
           id: {$set: event.target.value}}
        );
        break;
      case 'l_name':
        list = update(this.state.list, {
           name: {$set: event.target.value}}
        );
        break;
      break;
      case 'l_descr':
        list = update(this.state.list, {
           descr: {$set: event.target.value}}
        );
      break;
      default:
        break;
    }
      this.setState({list: list});
  }

  shouldComponentUpdate = (nextProps, nextState) => {
   return  this.state.list !== nextState.list || this.props.open !== nextProps.open;
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.props.handleSubmit.bind(this,this.state.list)}
      />,
    ];
    return (
      <Dialog
          title="Creacte new Wish List"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
        <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
          <TextField  style={{width: "15%"}} name="l_id" hintText="list id"  floatingLabelText="Input list ID" onChange={this.handleChange.bind(this)}/>
          <TextField  name="l_name" hintText="list name"  floatingLabelText="Input list name" onChange={this.handleChange.bind(this)}/>
          <TextField  name="l_descr" hintText="list description"  floatingLabelText="Input short description" onChange={this.handleChange.bind(this)}/>
        </div>

        </Dialog>
    );
  }
}

export default DialogPopup;
