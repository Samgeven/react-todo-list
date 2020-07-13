import React from 'react';
import './ItemList.css';
import gsap from 'gsap';
import Tasks from '../Tasks/Tasks';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
    }

    this.itemWrp = null;
    this.tl = gsap.timeline({paused: true});

    this.inputNote = null;
    this.inputNoteTl = gsap.timeline({paused: true});

    this.handleDelete = this.handleDelete.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.getRandomPlaceholder = this.getRandomPlaceholder.bind(this);
    this.emptyTaskAnimation = this.emptyTaskAnimation.bind(this);
  }

  componentDidMount() {
    this.tl.from(this.itemWrp, 0.3, {scaleX:0.8, scaleY:0.8, opacity: 0});
    this.tl.play();
  }
  
  componentWillUnmount() {
    this.tl.reverse();
  }

  handleDelete(e) {
    this.props.deleteNote(this.props.currentKey);
  }

  handleTaskChange(e) {
    this.setState({
      newTask: e.target.value
    })
  }

  handleAddTask() {
    const newTask = {
      note: this.state.newTask,
      done: false
    }
    this.props.addTask(newTask, this.props.currentKey);
    this.setState({
      newTask: ""
    })
  }

  emptyTaskAnimation() {
    this.inputNoteTl.fromTo(this.inputNote, {x: 0}, {x: 6, duration: 0.2, repeat: 3});
    this.inputNoteTl.play();
  }

  getRandomPlaceholder() {
    const placeholders = ["Check out Elon Musk tweets", "Cook tomato soup", "Prepare to math exam", "Read some russian classic", "Listen to Pink Floyd", "Get rid of old shoes", "Order pizza"];
    const index = Math.floor(Math.random() * Math.floor(placeholders.length));
    return placeholders[index];
  }

  render() {
    return (
      <div className="item-list_wrp col-xl-4" ref={div => this.itemWrp = div}>
        <div className="item-list_border">
          <h2 className="item-list__title">
            {this.props.title}
          </h2>
          <ul className="item-list">
            {
              this.props.notes[this.props.currentKey].tasks.map((task, index) => {
                return <Tasks currentKey={this.props.currentKey} 
                              notes={this.props.notes} 
                              newTask={this.state.newTask} 
                              taskName={task.note}
                              key={index}>
                       </Tasks>
              })
            } 
          </ul>
          <div className="item-list-add-tsk">
            <div className="item-list_add-tsk-wrp">
              <p className="item-list__add-task" ref={p => this.inputNote = p}>Add new task:</p>
              <input type="text" 
                     className="item-list__task-input" 
                     onChange={this.handleTaskChange} 
                     placeholder={this.getRandomPlaceholder()}
                     value={this.state.newTask} />
              <button className="item-list__button-task" onClick={this.state.newTask ? this.handleAddTask : this.emptyTaskAnimation}>Add</button>
            </div>
          </div>
          <div className="item__delete" onClick={this.handleDelete}></div>
        </div>
      </div>
    )
  }
}

export default ItemList;