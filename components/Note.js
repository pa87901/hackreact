import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props)
    // set initial state with isEditing
    this.state = {
      isEditing: false,
      isHoveringButtons: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  delete() {
    // Send id of note back up to for deletion
  	this.props.deleteNote(this.props.noteId);
  }

  update() {
    // Send new note description back up
  	var newText = this.refs.newText.value;
  	this.props.updateNote(newText, this.props.noteId);
    this.toggleEdit();
  }

  toggleEdit() {
    // toggle isEditing state
    this.setState({isEditing: !this.state.isEditing});
  }

  handleMouseEnter() {
    this.setState({isHoveringButtons: true})
  }

  handleMouseLeave() {
    this.setState({isHoveringButtons: false})
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
