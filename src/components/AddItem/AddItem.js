import React from 'react';
import './AddItem.css'
import AddTitle from '../AddTitle/AddTitle'

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  
  render() {
    return (
      <div className="item-list_wrp col-xl-4">
        <div className="item-list_border item-list_add">
          <AddTitle notes={this.props.notes} 
                    active={this.state.isActive} 
                    addNote={this.props.addNote}
                    handlePlusClick={this.handleClick} 
                    currentKey={this.props.currentKey}>
          </AddTitle>
        </div>
      </div>
    )
  }
}

export default AddItem;