import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const productsLocal = localStorage.getItem("products")
const initialState: ICartState = {
  products: productsLocal ? JSON.parse(productsLocal) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductSuccess(state, action: PayloadAction<IProduct>) {
      const newData = (state.products as Array<IProduct>).find((item) => item._id === action.payload._id);
      if (newData) {
        alert('Có trong giỏ hàng rồi TKML')
      } else {
        const newData = (state.products as Array<IProduct>).concat(action.payload)
        localStorage.setItem("products", JSON.stringify(newData));
        state.products = newData;
      }
    },
    clearProduct(state) {
      state.products = [];
    },
    deleteProductSuccess(state, action: PayloadAction<IProduct>) {
      const newData = (state.products as Array<IProduct>)?.filter(item => JSON.stringify(item) !== JSON.stringify(action.payload))
      localStorage.setItem("products", JSON.stringify(newData));
      state.products = newData;
    },
  },
});

export const { addProductSuccess, clearProduct, deleteProductSuccess } = cartSlice.actions;

export default cartSlice.reducer;
