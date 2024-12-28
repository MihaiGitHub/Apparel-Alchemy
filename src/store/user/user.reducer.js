import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

// createSlice creates the reducer, action and action types
// (no longer needed to define action types, it will be defined by redux toolkit)
export const userSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    // setCurrentUser: () => {} // below is the short hand of this
    // action is every action that passes through the store
    setCurrentUser(state, action) {
      // this only looks like its mutating the state, but under the hood, redux toolkit is creating a brand new object
      // under the hood, redux toolkit uses the immer library
      // allows you to write code that appears to mutate your data directly, while under the hood, Immer creates a new, updated copy of the data, preserving the original
      state.currentUser = action.payload;
    },
  },
});

// destructure the setCurrentUser function from above
// .actions = property on the returned object that has all the actions that are written inside the "reducers" from above
export const { setCurrentUser } = userSlice.actions;

// actual reducer function that gets created from createSlice
export const userReducer = userSlice.reducer;
