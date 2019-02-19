// action creator
// named export instead of default
export const selectSong = song => {
  // return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
