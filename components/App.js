// What are the variables wrapped in braces doing?
import React, { Component } from 'react';
import { v4 } from 'uuid'
import NoteMenu from './NoteMenu'
import NoteList from './NoteList'

class App extends Component {
  constructor(props) {
    super(props)
    // Add initial state with key of notes and value of empty array
    this.state = {
      notes: []
    }

    // You'll have to bind functions here or before passing them down as props

  }

  addNote(text) {
    // add new note to state as an object with the keys:
    // `noteId` using `v4` method above
    // `desc` as a string
    console.log('Adding new note with text: ' + text);
  }

  deleteNote(id) {
    // delete note from state using the given `id`
    console.log('Deleting note with id: ' + id);
  }

  updateNote(text, id) {
    // update note with given `id` in state with `desc`
    console.log('Updating note id: ' + id  + 'with text: ' + '\"' + text + '\"');
  }

  render() {
    return (
      <div>
        <h1>HackReact</h1>
        {/* NoteMenu goes here */}
        {/* NoteList goes here */}
      </div>
    )
  }
}

export default App;
