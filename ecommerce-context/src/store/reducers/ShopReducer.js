const ShopReducer = (state, action) => {
  const { type, payload } = action;
  if (type === "CLOSE_LOADER") {
    return { ...state, loader: payload };
  } else if (type === "PRODUCTS") {
    return { ...state, products: payload };
  } else {
    return state;
  }
};
export default ShopReducer;
