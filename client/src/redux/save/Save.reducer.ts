import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedsLocal = localStorage.getItem("saveds")
const initialState: ISaveState = {
  saveds: savedsLocal ? JSON.parse(savedsLocal) : [],
};

const saveSlice = createSlice({
  name: "saveds",
  initialState,
  reducers: {
    addProductSuccess(state, action: PayloadAction<IProduct>) {
      const newData = (state.saveds as Array<IProduct>).concat(action.payload)
      localStorage.setItem("saveds", JSON.stringify(newData));
      state.saveds = newData;
    },
    clearProduct(state) {
      state.saveds = [];
    },
    deleteProductSuccess(state, action: PayloadAction<IProduct>) {
      const newData = (state.saveds as Array<IProduct>)?.filter(item => JSON.stringify(item) !== JSON.stringify(action.payload))
      localStorage.setItem("saveds", JSON.stringify(newData));
      state.saveds = newData;
    },
  },
});

export const { addProductSuccess, clearProduct, deleteProductSuccess } = saveSlice.actions;

export default saveSlice.reducer;
