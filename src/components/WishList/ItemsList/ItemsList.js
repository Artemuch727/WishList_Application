/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {List, ListItem} from 'material-ui/List';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import EditDialog from 'material-ui/Dialog';

import s from './ItemsList.css';
import DialogPopup from '../Dialog/DialogPopup.js';
import api from '../../../core/api';
import SearchField from '../SearchField/SearchField.js';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selItem: {},
      w_items: [],
      searchQuery:'',
      openEdit: false
      }
    }

    componentWillReceiveProps(nextProps) {
        api.getListItemsFromDB(nextProps.listSelected)
          .then((response) => this.setState({...this.state, w_items: response.data, selItem: {}, searchQuery: ''}))
    }

      handleToggleSearch(searchQuery) {
      if (searchQuery != ''){
        this.setState({...this.state, searchQuery: searchQuery });
        api.searchItemsByTitle(searchQuery)
          .then((response) => this.setState({...this.state, w_items: response.data}))
        }
      }

      openItemChangeDialog() {
        this.setState({openEdit: true})
      }
      closeItemChangeDialog() {
        this.setState({openEdit: false})
      }

      handleItemChange() {
        var newInfo = this.state.selItem.description;
        this.setState({openEdit: false})
        console.log(newInfo);
        api.changeListIteminDB(this.state.selItem.id, newInfo).then((err)=>{
            console.log(err);
          })
          .then(() => api.getListItemsFromDB(this.props.listSelected))
          .then((response) => this.setState({...this.state, w_items: response.data, selItem: {}}))
      }

      handleItemDescriptionChange(event) {
          console.log(event.target.value );
        this.setState({...this.state, selItem: {...this.state.selItem, description: event.target.value }})
      }


      handleItemSelect(item) {
        this.setState({...this.state, selItem: item})
      }

      handleItemDelete() {
        var itemId  = this.state.selItem.id;
        api.deleteListItemFromDB(itemId).then((err)=>{
            console.log(err);
          })
          .then(() => api.getListItemsFromDB(this.props.listSelected))
          .then((response) => this.setState({...this.state, w_items: response.data, selItem: {}}))
      }

      handleItemMove = (listId) => {
        api.moveListItemFromDB(this.state.selItem.id, listId).then((err)=>{
            console.log(err);
          })
          .then(() => api.getListItemsFromDB(this.props.listSelected))
          .then((response) => this.setState({...this.state, w_items: response.data, selItem: {}}))
          .then(() => this.props.handleItemsRefresh())
      }


  render() {
    const iconButtonElement = (
      <IconButton touch={true} tooltip="Actions" tooltipPosition="bottom-left" >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
        <IconMenu  anchorOrigin={{ vertical: 'top', horizontal: 'right',}} iconButtonElement={iconButtonElement}>
          <MenuItem
            rightIcon={<ArrowDropRight />}
            menuItems={
              this.props.lists.map((item) => {
                return <MenuItem key={item.id} primaryText={item.name} onTouchTap={this.handleItemMove.bind(this,item.id)}/>
              })
            }>
              Move to another list
          </MenuItem>
            <MenuItem onTouchTap={this.openItemChangeDialog.bind(this)}>Edit item</MenuItem>
          <MenuItem onTouchTap={this.handleItemDelete.bind(this)}>Delete item</MenuItem>
        </IconMenu>
    );

    let WishlistItems = this.state.w_items.map((item) => {
      return <ListItem
          key={item.id}
          style={{ minHeight:"180px", cursor: 'initial'}}
          onTouchTap={this.handleItemSelect.bind(this,item)}
          rightIcon={rightIconMenu}
          >
          <div>
            <div>
              <img src={item.img} style={{float:"left", marginRight:"25px", width:'130px', height: '130px' }}/>
            </div>
            <div>
              <h3 style={{margin: '5px 0px', wordWrap: 'break-word'}}>{item.title}</h3>
              <p style={{fontSize: 'small', color: 'rgb(123, 123, 123)', margin: '2px 0px' }}>Added from: <a href="`${item.url}`">{item.url}</a></p>
              <span style={{fontSize: 'small', color: '#b12704' }}>{'$'+item.price}</span>
              <p style={{fontSize: 'small', color: 'rgb(123, 123, 123)', margin: '10px 0px 5px 0px' }}>Description:</p>
              <p style={{fontSize: '14px', margin: '5px 0px',wordWrap: 'break-word' }}>{item.description}</p>
            </div>
          </div>
        </ListItem>
    });

    let panTitle;//= selList.length > 0 ? selList[0].name : '';
    if (this.state.searchQuery !== '') {
      panTitle = 'Results of looking for: "' + this.state.searchQuery +'". Total records: ' + this.state.w_items.length;
    } else {
      panTitle = this.props.listSelected != '' ? this.props.lists.filter((item)=>{return item.id == this.props.listSelected})[0].name : '';
    }

    let resulList = (
      <div>
        <List className={s.listbox} children = {WishlistItems} />
        <EditDialog
            title={this.state.selItem.title}
            actions={actions}
            modal={false}
            open={this.state.openEdit}
            onRequestClose={this.closeItemChangeDialog.bind(this)}
          >
          <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%"}}>
              <div style={{marginRight: "35px"}}>
                <img src={this.state.selItem.img} width="120px" height="120px" />
              </div>
              <div style={{ width: "100%"}}>
                <TextField fullWidth={true} value={this.state.selItem.description} onChange={this.handleItemDescriptionChange.bind(this)} multiLine={true} rows={1}  name="descr" floatingLabelText="Input  description" />
              </div>
          </div>
          </EditDialog>
      </div>
    )

    let noItemsTitle = <h3 className={s.panelTitle}>There is no items in selected list :( </h3>


    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeItemChangeDialog.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleItemChange.bind(this)}
      />,
    ];

    return (
      <div className={s.panel} style={{minWidth: '450px',  width: '70%',  display: this.props.listSelected.length == 0 ? 'none' : 'block'}}>
        <div className={s.panelHeading + ' ' + s.panelDefault + ' ' + s.panelFlex} >
          <h2 className={s.panelTitle}>{ panTitle }</h2>
          <SearchField handleToggleSearch={this.handleToggleSearch.bind(this)}/>
        </div>
        <div className={s.panelBody} >
          {this.state.w_items.length > 0 ? resulList : noItemsTitle}
        </div>
      </div>
    );
  }
}



export default withStyles(s)(ItemsList);
