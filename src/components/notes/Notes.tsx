import React from 'react'
import "./notes.css"
import { NoteProps, Color } from './notes-type'
import Card from '../card/card'
import {FaTrash, FaEdit} from 'react-icons/fa'


const Notes = (props: NoteProps) => {
  return (
    <Card bgColor={props.priority && Color[props.priority]}
      height="2"
      padding='1'
    >
      <>
        <div className={`note ${props.priority}`}>
          {props.text}
        </div>
        <div className='right-corner'>
          <FaEdit></FaEdit>
          <FaTrash></FaTrash>
        </div>
      </>
    </Card>
  )
}

export default Notes
