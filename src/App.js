import React, { useState, useEffect} from 'react'
import {nanoid} from 'nanoid';
import ListOfNotes from './components/ListOfNotes';
import './App.css'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Fonts from './components/Fonts';



function App(){

  const [notes, setNotes] = useState([{
    id:nanoid(),
    text:"this is my first note",
    date: "15/04/24"
  },

  {
    id:nanoid(),
    text:"this is my second note",
    date: "15/04/24"
  },

 

]);

const [searchText, setSearchText] = useState('')
const [selectedFont, setSelectedFont] = useState('Arial');


useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);


const addNote = (text) => {

  const date = new Date()

  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
    font:selectedFont
  
  }

  const newNotes = [...notes, newNote];
  setNotes(newNotes);

}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !==id);

  setNotes(newNotes);
}

const editNote = (id, newText) => {
  const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
  );
  setNotes(updatedNotes);
};


  return(
    <div className='container'>

      <Header />
      <SearchBar handleSearch={setSearchText}/>
      <Fonts selectedFont={selectedFont} handleFontChange={setSelectedFont} />
  
      <ListOfNotes notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText)
        )} handleAddNote={addNote} handleDeleteNote={deleteNote}     selectedFont={selectedFont}
        handleEditNote={editNote}
      />
     
    </div>
  )
}

export default App;
