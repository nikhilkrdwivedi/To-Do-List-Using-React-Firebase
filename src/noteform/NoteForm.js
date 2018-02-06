import React, { Component } from 'react';
import './NoteForm.css';


class NoteForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      newNoteContent: '',
    };
    this.handleUserInput=this.handleUserInput.bind(this);
    this.writeNote=this.writeNote.bind(this);
  }
  //when the user input changes , set newNoteContent
  //to the value of whats in the input box
  handleUserInput(e){
  //  console.log(this);
    this.setState({
      newNoteContent:e.target.value,//the value of the text input
    })
  }
  writeNote(){
       // call a method that sets the noteContent for a note to
       // the value of the input
       this.props.addNote(this.state.newNoteContent);

       // Set newNoteContent back to an empty string.
       this.setState({
           newNoteContent: '',
       })
}
  render(){
    return(
      <div className="formWrapper">
        <input className="noteInput" placeholder=" write a new note.." value={this.state.newNoteContent} onChange={this.handleUserInput}/>
        <button className="noteButton"
        onClick={this.writeNote}
        >Add Note</button>
      </div>
    );
  }
}
export default NoteForm;
