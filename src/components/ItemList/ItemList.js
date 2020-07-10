import React from 'react';
import './ItemList.css'

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    console.log(e.target)
    this.props.deleteNote(this.props.currentKey);
  }

  render() {
    return (
      <div className="item-list_wrp col-xl-4">
        <div className="item-list_border">
          <h2 className="item-list__title">
            {this.props.title}
          </h2>
          <ul className="item-list">
            <li className="item-list__el">
              To feed some monkeys
              {this.props.currentKey}
            </li>
            <li className="item-list__el">
              To do the monkey thing again
            </li>
          </ul>
          <div className="item__delete" onClick={this.handleDelete}></div>
        </div>
      </div>
    )
  }
}

export default ItemList;