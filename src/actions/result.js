import { get } from "../api/api";

export const SET_ALBUMS = "SET_ALBUMS";
export const ADD_ALBUMS = "ADD_ALBUMS";
export const SET_ARTISTS = "SET_ARTISTS";
export const ADD_ARTISTS = "ADD_ARTISTS";

//functions to dispatch payloads
export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums,
});
export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums,
});
export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists,
});
export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists,
});

//function to get result from api
export const getResult = (search) => {
  return async (dispatch) => {
    const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      search
    )}&type=album,artist`;
    const result = await get(API_URL);
    console.log(result);
    const { albums, artists } = result;
    dispatch(setAlbums(albums));
    return dispatch(setArtists(artists));
  };
};
