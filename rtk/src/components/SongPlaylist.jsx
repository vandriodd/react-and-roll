import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

const SongPlaylist = () => {
  // accesses the dispatch function from the store
  const dispatch = useDispatch()
  // useSelector is a hook that allows you to extract data from the Redux store state
  // It takes a function as an argument that returns a piece of the state
  const songPlaylist = useSelector((state) => state.songs)

  const handleSongAdd = (song) => {
    // I need specify the action type and the payload
    // addSong is the action creator
    // song is the payload
    // const action = addSong(song)
    // dispatch(action)
    // or more concise:
    dispatch(addSong(song))
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song))
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
};

export default SongPlaylist;
