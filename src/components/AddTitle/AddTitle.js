import React from 'react';
import './AddTitle.css'

class AddTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "My note"
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
      id: this.props.currentKey,
      tasks: []
    };
    this.props.addNote(newItem);
    this.props.handlePlusClick();
  }
  
  getRandomPlaceholder() {
    const placeholders = ["books to read", "my dreams", "grocery stuff", "cool boardgames"];
    const index = Math.floor(Math.random() * Math.floor(placeholders.length));
    return placeholders[index];
  }

  render() {
    if(this.props.active) {
      return (
        <div className="item-list_add-wrp">
          <p className="item-list__add-title">Add title:</p>
          <input className="item-list__add-input" 
                 type="text" 
                 onChange={this.handleTitleChange} 
                 placeholder={`For example - ${this.getRandomPlaceholder()}`}/>
          <button className="item-list__add-btn" 
                  onClick={this.handleListsUpdate}>
                    Done
          </button>
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