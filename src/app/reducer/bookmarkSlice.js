import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

if (typeof localStorage !== "undefined") {
  const savedItems = JSON.parse(localStorage.getItem("bookmark"));
  if (savedItems) {
    initialState.items = savedItems;
  }
}

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("bookmark", JSON.stringify(state.items));
    },
    removeBookmark: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("bookmark", JSON.stringify(state.items));
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
