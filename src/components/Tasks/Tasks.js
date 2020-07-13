import React from 'react';
import './Tasks.css';
import gsap from 'gsap';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.taskWrp = null;
    this.tl = gsap.timeline({paused: true});
  }

  componentDidMount() {
    this.tl.from(this.taskWrp, 0.2, {scaleX:0.8, scaleY:0.8, opacity: 0});
    this.tl.play();
  }

  render() {
    return (
      <li className="item-list__el" 
          ref={li => this.taskWrp = li}>
          {this.props.taskName}
      </li>
    )
  }
}

export default Tasks;