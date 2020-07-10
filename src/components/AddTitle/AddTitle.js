import React from 'react';
import './AddTitle.css'

class AddTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: ""
    }

    this.handleListsUpdate = this.handleListsUpdate.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      newTitle: e.target.value
    })
  }

  handleListsUpdate() {
    const newItem = {
      title: this.state.newTitle,
      id: this.props.currentKey
    };
    this.props.addNote(newItem);
    this.props.handlePlusClick();
  }
  

  render() {
    if(this.props.active) {
      return (
        <div className="item-list_add-wrp">
          <p className="item-list__add-title">Add title:</p>
          <input className="item-list__add-input" type="text" onChange={this.handleTitleChange} />
          <button className="item-list__add-btn" onClick={this.handleListsUpdate}>Done</button>
        </div>
      )
    }
    else {
      return (
        <div className="item-list_plus" onClick={this.props.handlePlusClick}></div>
      )
    }
  }
}

export default AddTitle;