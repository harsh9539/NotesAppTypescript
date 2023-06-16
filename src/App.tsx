import { useState } from "react";
import AddNote from "./components/add-note/add-note"
import Notes from "./components/notes/Notes"
import { NotesData } from "./data"
import { NoteTypes } from "./components/notes/notes-type";
function App() {
  const [notes,setNotes] = useState(NotesData);

  const addNote = (note:NoteTypes)=>{
    setNotes([note,...notes]);
  }

  return (
    <div className="App">
      <h2>Notes App</h2>
      <AddNote addNote={addNote}/>
      <div>
        {
          notes.map((note,key) => (
            <Notes key={key} text={note.text} priority={note.priority} />
          ))
        }
      </div>
    </div>
  )
}

export default App
