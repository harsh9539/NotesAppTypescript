

export type Priority = 'high'|'medium'|'low';


export type NoteProps={
  id?:string,
  text:String,
  priority?:Priority,
}

export type NoteTypes={
  id:string,
  text:string,
  priority:Priority
}


export enum Color{
  high='green',
  medium="yellow",
  low='tomato'
}