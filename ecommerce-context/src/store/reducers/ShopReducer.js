const ShopReducer = (state, action) => {
  if (action.type === "CHANGE_LOADER") {
    return { ...state, loader: !state.loader };
  } else if (action.type === "PRODUCTS") {
    return { ...state, products: action.payload };
  } else {
    return state;
  }
};
export default ShopReducer;
