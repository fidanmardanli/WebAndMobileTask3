import { MdDeleteForever } from 'react-icons/md';

// const Note = ({ id, text, date, handleDeleteNote }) => {
// 	return (
// 		<div className='note'>
// 			<span>{text}</span>
// 			<div className='note-footer'>
// 				<small>{date}</small>
// 				<MdDeleteForever
// 					onClick={() => handleDeleteNote(id)}
// 					className='delete-icon'
// 					size='1.3em'
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default Note;




import { useState } from 'react';

const Note = ({ id, text, date, status, handleDeleteNote, handleUpdateNote, handleStatusChange }) => {
    const [editMode, setEditMode] = useState(false);
    const [newText, setNewText] = useState(text);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        handleUpdateNote(id, newText);
        setEditMode(false);
    };

    return (
        <div className='note'>
            {editMode ? (
                <textarea
                    rows='8'
                    cols='10'
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                ></textarea>
            ) : (
                <span>{text}</span>
            )}
            <div className='note-footer'>
                <small>{date}</small>
                <select value={status} onChange={(e) => handleStatusChange(id, e.target.value)}>
                <option value='Noted'>Noted</option>
                <option value='Want to Learn'>Want to Learn</option>
                <option value='Learned'>Learned</option>
                </select>
                <button onClick={handleDeleteNote}>Delete</button>
                {editMode ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )}
            </div>
        </div>
    );
};

export default Note;






// import { useState } from 'react';
// import { MdDeleteForever } from 'react-icons/md';

// const Note = ({ id, question, answer, status, date, handleDeleteNote, handleStatusChange }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleFlip = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div className={`note ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
//             <div className='note-front'>
//                 <span>{question}</span>
//             </div>
//             <div className='note-back'>
//                 <span>{answer}</span>
//             </div>
//             <div className='note-footer'>
//                 <small>{date}</small>
//                 <select value={status} onChange={(e) => handleStatusChange(id, e.target.value)}>
//                     <option value='Noted'>Noted</option>
//                     <option value='Want to Learn'>Want to Learn</option>
//                     <option value='Learned'>Learned</option>
//                 </select>
//                 <MdDeleteForever
//                     onClick={() => handleDeleteNote(id)}
//                     className='delete-icon'
//                     size='1.3em'
//                 />
//             </div>
//         </div>
//     );
// };

// export default Note;


