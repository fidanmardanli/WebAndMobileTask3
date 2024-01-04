// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import NotesList from './components/NotesList';
// import Search from './components/Search';
// import Header from './components/Header';

// const App = () => {
// 	const [notes, setNotes] = useState([
// 		{
// 			id: nanoid(),
// 			text: 'This is my first note!',
// 			date: '15/04/2021',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'This is my second note!',
// 			date: '21/04/2021',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'This is my third note!',
// 			date: '28/04/2021',
// 		},
// 		{
// 			id: nanoid(),
// 			text: 'This is my new note!',
// 			date: '30/04/2021',
// 		},
// 	]);

// 	const [searchText, setSearchText] = useState('');

// 	const [darkMode, setDarkMode] = useState(false);

// 	useEffect(() => {
// 		const savedNotes = JSON.parse(
// 			localStorage.getItem('react-notes-app-data')
// 		);

// 		if (savedNotes) {
// 			setNotes(savedNotes);
// 		}
// 	}, []);

// 	useEffect(() => {
// 		localStorage.setItem(
// 			'react-notes-app-data',
// 			JSON.stringify(notes)
// 		);
// 	}, [notes]);

//   const handleUpdateNote = (id, newText) => {
//     const updatedNotes = notes.map((note) =>
//         note.id === id ? { ...note, text: newText } : note
//     );
//     setNotes(updatedNotes);
//   };

// 	const addNote = (text) => {
// 		const date = new Date();
// 		const newNote = {
// 			id: nanoid(),
// 			text: text,
// 			date: date.toLocaleDateString(),
// 		};
// 		const newNotes = [...notes, newNote];
// 		setNotes(newNotes);
// 	};

// 	const deleteNote = (id) => {
// 		const newNotes = notes.filter((note) => note.id !== id);
// 		setNotes(newNotes);
// 	};

// 	return (
// 		<div className={`${darkMode && 'dark-mode'}`}>
// 			<div className='container'>
// 				<Header handleToggleDarkMode={setDarkMode} />
// 				<Search handleSearchNote={setSearchText} />
// 				<NotesList
// 					notes={notes.filter((note) =>
// 						note.text.toLowerCase().includes(searchText)
// 					)}
// 					handleAddNote={addNote}
// 					handleDeleteNote={deleteNote}
// 				/>
// 			</div>
// 		</div>
// 	);


// };

// export default App;







import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Filter from './components/Filter';

const App = () => {
  const [filter, setFilter] = useState('All');
   // State for the search text
    const [notes, setNotes] = useState([
        
{
  id: nanoid(),
  text: 'This is my first note!',
  date: '15/04/2021',
},
{
  id: nanoid(),
  text: 'This is my second note!',
  date: '21/04/2021',
},
{
  id: nanoid(),
  text: 'This is my third note!',
  date: '28/04/2021',
},
{
  id: nanoid(),
  text: 'This is my new note!',
  date: '30/04/2021',
},
    ]);

    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

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

    const handleUpdateNote = (id, newText) => {
      const newDate = new Date().toLocaleDateString(); // Correctly define newDate here
      const updatedNotes = notes.map((note) =>
          note.id === id ? { ...note, text: newText, date: newDate } : note
      );
      setNotes(updatedNotes);
  };
  

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };
    const updateStatus = (id, newStatus) => {
              const updatedNotes = notes.map((note) =>
                  note.id === id ? { ...note, status: newStatus } : note
              );
              setNotes(updatedNotes);
          };

         const handleStatusChange = (id, newStatus) => {
            const updatedNotes = notes.map((note) =>
                note.id === id ? { ...note, status: newStatus } : note
            );
            setNotes(updatedNotes);
        };

        const handleFilterChange = (selectedFilter) => {
          setFilter(selectedFilter);
         };
  
         const filteredAndSearchedNotes = notes
         .filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()))
         .filter(note => filter === 'All' || note.status === filter);
         
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <Filter handleFilterChange={handleFilterChange} />
                <NotesList
                     notes={filteredAndSearchedNotes}
                   
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    handleUpdateNote={handleUpdateNote}  // Added this line
                    handleStatusChange={updateStatus}
                />
            </div>
        </div>
    );
};

export default App;





// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import NotesList from './components/NotesList';
// import AddNote from './components/AddNote';
// import Header from './components/Header';

// const App = () => {
//     const [notes, setNotes] = useState([]);

//     useEffect(() => {
//         const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
//         if (savedNotes) {
//             setNotes(savedNotes);
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
//     }, [notes]);

//     const addNote = (note) => {
//         const newNote = {
//             id: nanoid(),
//             ...note,
//             date: new Date().toLocaleDateString()
//         };
//         const newNotes = [...notes, newNote];
//         setNotes(newNotes);
//     };

//     const deleteNote = (id) => {
//         const newNotes = notes.filter((note) => note.id !== id);
//         setNotes(newNotes);
//     };

//     const updateStatus = (id, newStatus) => {
//         const updatedNotes = notes.map((note) =>
//             note.id === id ? { ...note, status: newStatus } : note
//         );
//         setNotes(updatedNotes);
//     };

//     return (
//         <div className='container'>
//             <Header />
//             <AddNote handleAddNote={addNote} />
//             <NotesList
//                 notes={notes}
//                 handleDeleteNote={deleteNote}
//                 handleStatusChange={updateStatus}
//             />
//         </div>
//     );
// };

// export default App;
