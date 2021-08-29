import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addSong(title);
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>New Song : </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default NewSongForm;
