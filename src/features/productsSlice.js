import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products_url } from "../utils/constants";

const initialState = {
  isSideBarOpen: false,
  productsItems: [],
  isLoading: true,
};

export const getProductsItems = createAsyncThunk(
  "products/getProductsItems",
  async () => {
    try {
      const response = await fetch(products_url);
      const data = await response.json();
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getProductsItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsItems.fulfilled, (state, action) => {
        console.log(action);
        state.productsItems = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductsItems.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const { toggleSideBar } = productsSlice.actions;

export default productsSlice.reducer;
