

export type Priority = 'high'|'medium'|'low';


export type NoteProps={
  id?:Number,
  text:String,
  priority?:Priority
}

export type NoteTypes={
  id:String | Number,
  text:String,
  priority:Priority
}


export enum Color{
  high='green',
  medium="yellow",
  low='tomato'
}