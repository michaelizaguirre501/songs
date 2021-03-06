import { combineReducers } from "redux";

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All-Star", duration: "3:30" },
    { title: "I Want It That Way", duration: "1:15" },
  ];
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
