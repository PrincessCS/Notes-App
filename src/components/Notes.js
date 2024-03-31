import React, {useState} from 'react'
import {MdDeleteSweep, MdEdit} from 'react-icons/md'

function Notes({id, text, date, handleDeleteNote, handleEditNote, selectedFont}){

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
        setEditedText(text); 
    };

    const handleChange = (event) => {
        setEditedText(event.target.value);
    };

    const handleSaveEdit = () => {
        handleEditNote(id, editedText);
        setIsEditing(false); 
    };


    return(

        <div className='notes' style={{ fontFamily: selectedFont }}>

{isEditing ? (
                <textarea
                    className='edit-text'
                    value={editedText}
                    onChange={handleChange}
                    style={{ fontFamily: selectedFont }}
                />
            ) : (
                <span>{text}</span>
            )}
              

        
              <div className='footer'>
                <div className='date'>
                <small>{date}</small>
                </div>
                <div className='edit-delete'>
                {isEditing ? (
                    <MdEdit className='edit-icon' onClick={handleSaveEdit} />
                ) : (
                    <MdEdit className='edit-icon' onClick={handleToggleEdit} />
                )}
                
                <MdDeleteSweep className='delete-icon' onClick={() => handleDeleteNote(id)}/>
                </div>
            </div>
        </div>

    )
}

export default Notes;