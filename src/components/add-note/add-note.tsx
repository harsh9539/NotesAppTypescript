import React, { useState } from 'react'
import "./add-note.css"
import { NoteTypes, Priority } from '../notes/notes-type'
import {v4 as uuidv4} from 'uuid';



type AddNoteProps={
  addNote:(note: NoteTypes) => void
}

const AddNote = (props:AddNoteProps) => {
  const [text,setText] = useState("");
  const [priority,setPriority] = useState<Priority>('low');



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
  }



  const handleClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    console.log(text);
    props.addNote({
      id:uuidv4(),
      text,
      priority,
    });
    setText("");
    setPriority('low');
  }

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setPriority(e.target.value as Priority);
  }

  return (
    <div>
      <form className='add-note'>
        <input value={text} type="text" onChange={handleChange}/>
        <select onChange={handleSelect} value={priority}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default AddNote
