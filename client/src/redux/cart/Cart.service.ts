import { json } from "stream/consumers";
import { getFailure, getStart, getSuccess } from "../common/Common.reducer";
import { AppThunk } from "../Store";
import { addProductSuccess, deleteProductSuccess } from "./Cart.reducer";

export const addToCart =
  (product: ICardCommon): AppThunk =>
    async (dispatch) => {
      // xy ly exception
      dispatch(getStart());

      try {
        dispatch(getSuccess());
        dispatch(addProductSuccess(product));
      } catch (error: any) {
        dispatch(getFailure(error.message));
      }
    };

export const deleteToCart =
  (product: ICardCommon): AppThunk =>
    async (dispatch) => {
      // xy ly exception
      dispatch(getStart());

      try {
        dispatch(getSuccess());
        dispatch(deleteProductSuccess(product));
      } catch (error: any) {
        dispatch(getFailure(error.message));
      }
    };