import React, { Component } from 'react';
import Note from './Note'

// A functional stateless component
const NoteList = (props) => {
  if (props.notes.length < 1) return null
  return (
    <ul className="list-group">
      {props.notes.map((note, i) => (
        <Note key={i} noteId={note.noteId} desc={note.desc} deleteNote={props.deleteNote} updateNote={props.updateNote}/>
      ))}
    </ul>
  )
}

// //************************************* The class version. Notice the small differences => You have to use 'this' to get at props.
// class NoteList extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <ul className="list-group">
//         {this.props.notes.map((note, i) => (
//           <Note key={i} noteId={i} desc={note.desc} deleteNote={this.props.deleteNote} updateNote={this.props.updateNote}/>
//         ))}
//       </ul>
//     )
//   }
// }

export default NoteList
