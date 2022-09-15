import { applyMiddleware, compose } from "redux";
import albumsReducer from "../reducers/albumsReducer";
import artistsReducer from "../reducers/artistsReducer";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
      albums: albumsReducer,
      artists: artistsReducer,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
