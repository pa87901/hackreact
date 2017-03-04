import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props)
    // set initial state with `isEditing` and `isHoveringButtons` to initial boolean values
    //We keep state component specific because we don't want to change the state of all the notes; only this one note.
    this.state = {
      isEditing: false,
      isHoveringButtons: false,
    }
    // bind functions here
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  delete() {
    // Send `noteId` of note back up to for deletion
  }

  update() {
    // Send new note description back up
    // Think about how you'll access the new description from here? HINT: 'refs'
    var newText = this.refs.newText.value;
    this.props.updateNote(newText, this.props.noteId);
    this.toggleEdit();
  }

  toggleEdit() {
    // toggle isEditing state
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  //HOMEWORK
  handleMouseEnter() {
    // set `isHoveringButtons` based on mouse enter event
    this.setState({
      isEditing: true
    })
  }
  //HOMEWORK
  handleMouseLeave() {
    // set `isHoveringButtons` based on mouse leave event
    this.setState({
      isHoveringButtons: true
    })
  }

  renderEditButtons() {
    if (!this.state.isHoveringButtons) return null
    return (
      <div className="btn-group" role="group">
        <button className="btn btn-default btn-primary" onClick={this.toggleEdit}>Edit</button>
  			<button className="btn btn-default btn-danger" onClick={this.delete}>&times;</button>
      </div>
    )
  }

  renderForm(){
    return (
      <li key={this.props.noteId} className="list-group-item list-group-item-info"
        onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}
      >
        <span className="note">{this.props.desc}</span>
        <br/>
        {this.renderEditButtons()}
      </li>
    )
  }

  // What does the `ref` attribute do below?
  renderEditForm() {
  	return (
      <li key={this.props.noteId} className="list-group-item list-group-item-info">
        <textarea ref="newText" className="note" defaultValue={this.props.desc}></textarea>
        <br/>
        <div className="btn-group" role="group">
          <button className="btn btn-default btn-success" onClick={this.update}>Save</button>
          <button className="btn btn-default btn-danger" onClick={this.toggleEdit}>&times;</button>
        </div>
      </li>
    )
  }

  render() {
    // Render component based on isEditing value
    if (!this.state.isEditing){
      return this.renderForm();
    } else {
      return this.renderEditForm();
    }
  }
}

export default Note
