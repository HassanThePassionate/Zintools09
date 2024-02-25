import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../reducer/bookmarkSlice";

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});

export default store;
