import React, { useState } from "react";

const Card = ({ notes, add, setNotes }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    add(value.trim());
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((notes) => notes.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] max-w-[1000px] md:mx-auto mx-2 my-10">
      <div className="w-full md:max-w-sm border-gray-300 bg-gray-50 rounded-lg shadow-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <div className="px-5 pt-5 pb-5 flex flex-col justify-between h-full">
          <textarea
            type="text"
            name=""
            id=""
            onChange={handleChange}
            value={value}
            maxLength={200}
            className="outline-0 resize-none h-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold"
            placeholder="Enter Your Note..."
          />

          <div className="flex items-center justify-end mt-5">
            <a
              href="#"
              onClick={handleSubmit}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add
            </a>
          </div>
        </div>
      </div>

      {notes.map((notes) => (
        <div
          key={notes.id}
          className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 md:my-0 md:min-h-65 break-words whitespace-normal"
        >
          <div className="px-5 pt-5 pb-5 flex flex-col justify-between h-full">
            <h1 className="text-white text-lg font-semibold mb-4">
              {notes.note}
            </h1>
            <div>
              <div className="flex items-center justify-between  mt-5">
                <p className="text-sm text-gray-300">{notes.date}</p>
                <a
                  href="#"
                  onClick={() => deleteNote(notes.id)}
                  class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                >
                  <img
                    src="/delete-icon.svg"
                    alt="Delete"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
