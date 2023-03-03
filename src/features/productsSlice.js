import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products_url } from "../utils/constants";

const initialState = {
  isSideBarOpen: false,
  productsItems: [],
  productsLoading: true,
  productsError: false,
  featuredProducts: [],
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
        state.productsLoading = true;
      })
      .addCase(getProductsItems.fulfilled, (state, action) => {
        state.productsItems = action.payload;
        const featured = action.payload.filter(
          (product) => product.featured === true
        );
        state.featuredProducts = featured;
        state.productsLoading = false;
      })
      .addCase(getProductsItems.rejected, (state) => {
        state.productsLoading = true;
      });
  },
});

export const { toggleSideBar } = productsSlice.actions;

export default productsSlice.reducer;
