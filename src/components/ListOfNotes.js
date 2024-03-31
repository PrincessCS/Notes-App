import React from "react";
import Notes from './Notes'
import NewNote from "./NewNote";


function ListOfNotes ({notes, handleAddNote, handleDeleteNote, handleEditNote,handleFontChange, selectedFont}){

    return (

        <div className="notes--list">
            {notes.map((notes) => (
            
            <Notes id={notes.id}
             text={notes.text} 
             date={notes.date}
             handleDeleteNote={handleDeleteNote}
             handleEditNote={handleEditNote}
             selectedFont={selectedFont}
     />))}

           <NewNote handleAddNote={handleAddNote} handleFontChange={handleFontChange} selectedFont={selectedFont}/>
         
        </div>

    )
    
}

export default ListOfNotes;