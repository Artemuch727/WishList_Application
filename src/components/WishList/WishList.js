/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Menu from 'material-ui/Menu';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RefreshBtn from 'material-ui/svg-icons/action/autorenew';
import React from 'react';
import Badge from 'material-ui/Badge';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WishList.css';
import api from '../../core/api';
import DialogPopup from './Dialog/DialogPopup.js';
import ItemsList from './ItemsList/ItemsList.js';

class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snack: {
        showSnack: false,
        message: ''
      },
      error: false,
      selList: '',
      lists: []
    };
  }

  componentDidMount() {
    let lists = api.getAllListsFromDB().then((response)=>{
      this.setState({...this.state, lists: response.data});
    });
  }



  handleOpen = () => {
    this.setState({...this.state, open: true});
  };

  handleClose = () => {
    this.setState({...this.state, open: false});
  };

  handleRequestCloseSnack = () => {
    this.setState({...this.state, snack: {...this.state.snack, showSnack: false}});
  };

  handleListAdd = (list) => {
    let chList = this.state.lists.filter((item)=>{
      return item.id == list.id
    });

    if (chList && chList.length > 0){
      alert('List already ecist!')
    } else {
      this.setState({...this.state, open: false, selItem:'', searchRes: ''});

      api.addNewListToDB(list).then((err)=>{
        console.log(err);
      })
      .then(() => api.getAllListsFromDB())
        .then((response)=>{this.setState({...this.state, lists: response.data,  snack: {...this.state.snack, showSnack: true, message: 'New list "'+list.name+'" Added'}});})
      .then(() => api.getListItemsFromDB(this.state.selList))
        .then((response) => this.setState({...this.state, w_items: response.data}))
    }
  };

  handleListDelete = (list) => {
    var delCheck = confirm("Are you sure in deleting list??");
    if (delCheck){
      api.deleteListFromDB(list.id)
        .then(() => api.getAllListsFromDB())
        .then((response) => this.setState({...this.state, lists: response.data, selItem:'', selList: '', searchRes: '', snack: {...this.state.snack, showSnack: true, message: 'List "'+list.name+'" has been deleted'}}))
    }
  };

  handleListselect = (item) => {
    this.setState({...this.state, selList:item.id, selItem:''});
    let w_items = api.getListItemsFromDB(item.id).then((response)=>{
      this.setState({...this.state, w_items: response.data, searchRes: ''});
    });
  };

  handleItemsRefresh() {
    let lists = api.getAllListsFromDB().then((response)=>{
      this.setState({...this.state, lists: response.data});
    });
  }


  render() {
    const style = {
      marginRight: 20,
    };

    const paperStyle = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    const countLabel = {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      fontWeight: "bold",
      lineHeight: "25px",
      alignContent: "center",
      fontSize: "12px",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#373277",
      color: "#FFF"
    };

    let Lists = this.state.lists.map((item) => {
      return <MenuItem
            key={item.id}
            primaryText={item.name}
            onTouchTap={this.handleListselect.bind(this,item)}
            style={{display:'flex', alignItems: 'center', width:'95%'}}
            leftIcon={<span style={countLabel}> {item.kol} </span>}
            rightIcon={ this.state.selList == item.id ?
                <Delete key={item.id} onTouchTap={this.handleListDelete.bind(this,item)} style={{float:"right", position:"absolute", right:'0px'}} /> : null}
            >
          </MenuItem>
    });

    let selList = this.state.lists.filter((item)=>{
      return item.id == this.state.selList;
    })

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.panel}  style={{width:"25%",float:"left",marginRight:"25px", minWidth: '195px'}}>
            <div className={s.panelHeading + ' ' + s.panelDefault + ' ' + s.panelFlex}>
              <div className = {s.panelFlex}>
                <h2 className={s.panelTitle} style={{marginRight: "10px"}}>My lists </h2>
                <RefreshBtn color={"#373277"} hoverColor={"#61dafb"} style={{cursor: "pointer"}} onTouchTap={this.handleItemsRefresh.bind(this)}/>
              </div>
              <FloatingActionButton mini={true} style={style} backgroundColor="#373277" onTouchTap={this.handleOpen}>
                <ContentAdd />
                  <DialogPopup open={this.state.open} handleClose={this.handleClose} handleSubmit={this.handleListAdd}/>
              </FloatingActionButton>
            </div>
            <div className={s.panelBody}>
              <Menu>
                {Lists}
              </Menu>
            </div>
          </div>
            <ItemsList lists = {this.state.lists} listSelected={this.state.selList} handleItemsRefresh={this.handleItemsRefresh.bind(this)}/>
        </div>
        <Snackbar
          open={this.state.snack.showSnack}
          message={this.state.snack.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestCloseSnack}
        />
      </div>
    );
  }
}

export default withStyles(s)(WishList);
