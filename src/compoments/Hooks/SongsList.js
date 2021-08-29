import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const SongsList = () => {
  const [songs, setSongs] = useState([
    { title: 'Memories of You', id: 1 },
    { title: 'Let me down Slowly', id: 2 },
    { title: 'How much do you', id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: new Date().getTime() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongsList;
