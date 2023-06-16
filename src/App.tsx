import { useReducer, useState } from "react";
import "./App.css"
import { ThemeContext } from "./context/theme/theme";
import Home from "./pages/Home/Home";
import Switch from "react-switch";
import { NoteTypes } from "./components/notes/notes-type";

type ThemeProp = 'dark' | 'light';
type StateType = {
  notes:NoteTypes[],
  editMode:boolean,
  noteToBeEdited:NoteTypes | null
}

function App() {
  const [theme,setTheme] = useState<ThemeProp>('light');
  const [checked,setChecked] = useState(false);

  const [state,dispatch] = useReducer((state:StateType,action:{type:string,payload:any})=>{
    switch(action.type){
      default:
        return state;
    }
  },{notes:[],editMode:false,noteToBeEdited:null})

  const changeHandler = (check:boolean)=>{
    setChecked(!checked);
    if(check){
      setTheme('dark');
    }
    else setTheme('light');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Switch onChange={changeHandler} checked={checked}></Switch>
      <Home />
    </ThemeContext.Provider>
  )
}

export default App
