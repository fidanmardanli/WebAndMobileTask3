import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
    const [noteStatus, setNoteStatus] = useState('Noted');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
            setNoteStatus('Noted');
		}
	};
    const handleStatusChange = (event) => {
                 setNoteStatus(event.target.value);
             };

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note <3'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;



// import { useState } from 'react';

// const AddNote = ({ handleAddNote }) => {
//     const [noteQuestion, setNoteQuestion] = useState('');
//     const [noteAnswer, setNoteAnswer] = useState('');
//     const [noteStatus, setNoteStatus] = useState('Noted');  // Default status
//     const characterLimit = 200;

//     const handleChangeQuestion = (event) => {
//         if (characterLimit - event.target.value.length >= 0) {
//             setNoteQuestion(event.target.value);
//         }
//     };

//     const handleChangeAnswer = (event) => {
//         if (characterLimit - event.target.value.length >= 0) {
//             setNoteAnswer(event.target.value);
//         }
//     };

//     const handleStatusChange = (event) => {
//         setNoteStatus(event.target.value);
//     };

//     const handleSaveClick = () => {
//         if (noteQuestion.trim().length > 0 && noteAnswer.trim().length > 0) {
//             handleAddNote({ question: noteQuestion, answer: noteAnswer, status: noteStatus });
//             setNoteQuestion('');
//             setNoteAnswer('');
//             setNoteStatus('Noted'); // Reset status to default
//         }
//     };

//     return (
//         <div className='note new'>
//             <textarea
//                 rows='4'
//                 cols='10'
//                 placeholder='Type you note <3'
//                 value={noteQuestion}
//                 onChange={handleChangeQuestion}
//             ></textarea>
            
//             <select value={noteStatus} onChange={handleStatusChange}>
//                 <option value='Noted'>Noted</option>
//                 <option value='Want to Learn'>Want to Learn</option>
//                 <option value='Learned'>Learned</option>
//             </select>
//             <div className='note-footer'>
//                 <small>
//                     {characterLimit - noteQuestion.length} Remaining
//                 </small>
//                 <button className='save' onClick={handleSaveClick}>
//                     Save
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AddNote;
