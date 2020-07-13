import React from 'react';
import './App.css';
import ItemList from '../ItemList/ItemList';
import AddItem from '../AddItem/AddItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.addTask = this.addTask.bind(this);
  }


  addNote(newNote) {
    let notesList = [...this.state.notes];
    notesList.push(newNote);
    this.setState({
      notes: notesList
    });
  }

  addTask(newTask, noteIndex) {
    let notesList = this.state.notes;
    notesList[noteIndex].tasks.push(newTask);
    this.setState({
      notes: notesList
    });
  }

  deleteNote(oldNoteId) {
    let notesList = this.state.notes;
    const newnotesList = notesList.filter(note => {
      return note.id !== oldNoteId
    })
    this.setState({
      notes: newnotesList
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="main_wrp container">
          <div className="main_row row">
            {
              this.state.notes.map((itemList, index) => {
                return <ItemList notes={this.state.notes} 
                                 key={itemList.id} 
                                 title={itemList.title} 
                                 currentKey={itemList.id} 
                                 deleteNote={this.deleteNote}
                                 addTask={this.addTask}>
                       </ItemList>
              })
            }
            <AddItem notes={this.state.notes} 
                     addNote={this.addNote} 
                     currentKey={this.state.notes.length === 0 ? 0 : this.state.notes[this.state.notes.length - 1].id + 1}>
            </AddItem>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
