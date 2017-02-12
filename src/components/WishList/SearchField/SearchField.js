
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchQuery: ''
      }
    }

  handleShowSearch = (event) => {
    const {handleToggleSearch} = this.props;

    if (this.state.open){
      handleToggleSearch(this.state.searchQuery);
      this.setState({...this.state, open: false, searchQuery: ''})
    }else {
      this.setState({...this.state, open: true})
    }
  }

  handleSearchChange = (event) => {
    this.setState({...this.state, searchQuery: event.target.value})
  }

  hendleSearchBegin = (event) => {
    const {handleToggleSearch} = this.props;
    if (event.keyCode == 13){
      handleToggleSearch(this.state.searchQuery);
      this.setState({...this.state, open: false, searchQuery: ''})
    }

  }


  render() {
    const style = {
      marginRight: 20,
    };

    return (
      <div style={{display:"flex",alignItems: "center"}}>
        <TextField  onKeyUp={this.hendleSearchBegin.bind(this)} value = {this.state.searchQuery} hintText="search..." style={{display: this.state.open ? 'block' : 'none'}} onChange={this.handleSearchChange.bind(this)}/>
        <FloatingActionButton backgroundColor="#373277" mini={true} style={style} onTouchTap={this.handleShowSearch.bind(this)}>
          <Search />
        </FloatingActionButton>
      </div>
    );
  }
}

export default SearchField;
