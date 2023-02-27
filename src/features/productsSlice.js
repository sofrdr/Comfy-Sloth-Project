import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleSideBar: (state, action) => {
      const { actionType } = action.payload;
      if (actionType === "open") {
        state.isSideBarOpen = true;
      }
      if (actionType === "close") {
        state.isSideBarOpen = false;
      }
    },
  },
});

export const { toggleSideBar } = productsSlice.actions;

export default productsSlice.reducer;
