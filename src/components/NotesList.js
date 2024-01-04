// import Note from './Note';
// import AddNote from './AddNote';

// const NotesList = ({
// 	notes,
// 	handleAddNote,
// 	handleDeleteNote,
// }) => {
// 	return (
// 		<div className='notes-list'>
// 			{notes.map((note) => (
// 				<Note
// 					id={note.id}
// 					text={note.text}
// 					date={note.date}
// 					handleDeleteNote={handleDeleteNote}
// 				/>
// 			))}
// 			<AddNote handleAddNote={handleAddNote} />
// 		</div>
// 	);
// };

// export default NotesList;






import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
    handleUpdateNote,
    handleStatusChange
}) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={() => handleDeleteNote(note.id)}
                    handleUpdateNote={handleUpdateNote}
                    handleStatusChange={handleStatusChange}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;



