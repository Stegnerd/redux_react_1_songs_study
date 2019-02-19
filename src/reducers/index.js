import { combineReducers } from "redux";

//reducers
// listing all the songs
const songsReducer = () => {
  return [
    { title: "Song 1", duration: "4:05" },
    { title: "Song 2", duration: "2:35" },
    { title: "Song 3", duration: "3:25" },
    { title: "Song 4", duration: "5:15" }
  ];
};

// select the specific song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
