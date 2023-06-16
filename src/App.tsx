import { useState } from "react";
import AddNote from "./components/add-note/add-note"
import Notes from "./components/notes/Notes"
import { NotesData } from "./data"
import { NoteTypes } from "./components/notes/notes-type";
function App() {
  const [notes,setNotes] = useState(NotesData);
  const [editMode,setEditMode] = useState(false);
  const [noteToBeEdited,setNoteToBeEdited] = useState<NoteTypes | null>(null);

  const addNote = (note:NoteTypes)=>{
    setNotes([note,...notes]);
  }

  const updateNote = (updatedNote:NoteTypes)=>{
    const index = notes.findIndex(note=>note.id === updatedNote.id);
    let editedNotes = [...notes];
    editedNotes.splice(index,1,updatedNote);
    setNotes(editedNotes);
    setEditMode(false);
  }

  const editNote = (id:string)=>{
    console.log(id);
    const note = notes.find(note=>note.id === id);
    setEditMode(true);
    if(note){
      setNoteToBeEdited(note);
    }
  }
  const deleteNote = (id:string)=>{
    const index = notes.findIndex(note=>note.id === id);
    let editedNotes = [...notes];
    editedNotes.splice(index,1);
    setNotes(editedNotes);
  }

  return (
    <div className="App">
      <h2>Notes App {notes.length}</h2>
      <AddNote addNote={addNote} editMode={editMode} noteToBeEdited={noteToBeEdited}
      updateNote={updateNote}
      />
      <div>
        {
          notes.map((note,key) => (
            <Notes key={key}
            text={note.text} 
            priority={note.priority} 
            id={note.id}
            editNote={editNote}
            deleteNote={deleteNote}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
