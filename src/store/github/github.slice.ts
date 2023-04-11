import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const FAV_KEY = "rfk"; //react favourite key

interface GithubState {
  favourites: string[];
}
const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((e) => e !== action.payload);
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});


export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer 