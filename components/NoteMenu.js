import React, { Component } from 'react';

// Here is the class version using the concept of 'refs' to retrieve/set values from an input
class NoteMenu extends Component {
  constructor(props) {
    super(props)
  }

  add() {
    // Add new note
    // How will you get the note description from here? HINT: `refs` SEE DOCUMENTATION
    const text = this.refs.state.newNoteText.value
    if (text) {
      this.props.addNote(text);
    }
    this.refs.newNoteText.value = ''
  }

  handleKeyPress(e) {
    // Only call `add` if the keypress is the `Enter` button
  }

  render() {
    return (
      <div id="note-menu" className="input-group">
        <input type="text" className="form-control" placeholder="Hack away!" ref="newNoteText" onKeyPress={this.handleKeyPress.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-default btn-success" type="button" onClick={this.add.bind(this)}>+</button>
        </span>
      </div>
    )
  }
}

// //***********************************************     Here is the stateless functional version
// const NoteMenu = (props) => {
//   const add = (e) => {
//   	//const newVal = this.refs.newNoteText.value;
//     if (newVal) {
//   		props.addNote(newVal);
//       //this.refs.newNoteText.value = "";
//    	}
//   }
//
//   const handleKeyPress = (e) => {
//     if (e.which === 13) {
//       add.call(e);
//     }
//   }
//
//   return (
//     <div id="note-menu" className="input-group">
//       <input type="text" className="form-control" placeholder="Hack away!" onKeyPress={this.handleKeyPress.bind(this)}/>
//       <span className="input-group-btn">
//         <button className="btn btn-default btn-success" type="button" onClick={this.add.bind(this)}>+</button>
//       </span>
//     </div>
//   )
// }

export default NoteMenu
