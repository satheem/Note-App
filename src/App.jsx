import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';


const App = () => {

const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    return JSON.parse(savedNotes);  // load saved notes if any
  } else {
    return [
      {
        id: 1,
        note: "Learn React useState",
        date: "2025-05-16 10:00 AM",
      },
      {
        id: 2,
        note: "Build a simple note app",
        date: "2025-05-16 11:00 AM",
      },
      {
        id: 3,
        note: "Take a break ☕",
        date: "2025-05-16 12:00 PM",
      },
      {
        id: 4,
        note: "Take a break ☕",
        date: "2025-05-16 12:00 PM",
      }
    ]; // default notes if nothing saved yet
  }
});

useEffect(() => {
  localStorage.setItem('notes', JSON.stringify(notes));
}, [notes]);




const addNotes = (noteText) => {
  const newNote = { id: Date.now(), note: noteText, date: new Date().toLocaleString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
}) };
  setNotes((prevNotes) => [...prevNotes, newNote])
  console.log(notes)
}

  
  return (
    <div className="w-full h-full">
      <Navbar />
      <Search />
      <Card notes ={notes} add={addNotes} setNotes={setNotes}/>
    </div>
  );
};

export default App;
