import { CLOSE_LOADER, PRODUCTS } from "../Actions";

const ShopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLOSE_LOADER:
      return { ...state, loader: payload };
      break;
    case PRODUCTS:
      return { ...state, products: payload };
      break;
    default:
      return state;
  }
};
export default ShopReducer;
