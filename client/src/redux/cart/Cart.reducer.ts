import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const productsLocal = localStorage.getItem("products")
const initialState: ICartState = {
  products: productsLocal ? JSON.parse(productsLocal) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductSuccess(state, action: PayloadAction<ICardCommon>) {
      const newData = (state.products as Array<ICardCommon>).concat(action.payload)
      localStorage.setItem("products", JSON.stringify(newData));
      state.products = newData;
    },
    clearProduct(state) {
      state.products = [];
    },
  },
});

export const { addProductSuccess, clearProduct } = cartSlice.actions;

export default cartSlice.reducer;
