import { json } from "stream/consumers";
import { getFailure, getStart } from "../common/Common.reducer";
import { AppThunk } from "../Store";
import { addProductSuccess } from "./Cart.reducer";

export const addToCart =
  (product: ICardCommon): AppThunk =>
    async (dispatch) => {
      // xy ly exception
      try {
        dispatch(getStart());
        dispatch(addProductSuccess(product));
      } catch (error: any) {
        dispatch(getFailure(error.message));
      }
    };
