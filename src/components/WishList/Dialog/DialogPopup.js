
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
        name:''
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
      default:
        break;
    }
      this.setState({list: list});
  }

  shouldComponentUpdate = (nextProps, nextState) => {
   return  this.state.list !== nextState.list || this.props.open !== nextProps.open;
  }

  handleSubmitBtn() {
    if (this.state.list.id && this.state.list.name ){
        this.props.handleSubmit(this.state.list)
    } else {
      alert('Fields cannot be empty!');
    }

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
        onTouchTap={this.handleSubmitBtn.bind(this)}
      />,
    ];
    return (
      <Dialog
          title="Creacte new Wish List"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          style={{    width: "80%"}}
        >
        <div style={{display: "flex", justifyContent: "flex-start", width: "100%"}}>
          <TextField  style={{width: "15%", marginRight: "35px"}} name="l_id" hintText="List ID"  floatingLabelText="List ID" onChange={this.handleChange.bind(this)}/>
          <TextField  fullWidth={true} name="l_name" hintText="List name"  floatingLabelText="List name" onChange={this.handleChange.bind(this)}/>
        </div>
      </Dialog>
    );
  }
}

export default DialogPopup;
