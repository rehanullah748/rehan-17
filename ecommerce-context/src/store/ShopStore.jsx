import { createContext, useReducer } from "react";
import ShopReducer from "./reducers/ShopReducer";
export const ShopContext = createContext();

const ShopStoreProvider = ({children}) => {
    const initState = {products: [], loader: true}
    const [state, dispatch] = useReducer(ShopReducer, initState);
    return(
        <ShopContext.Provider value={{state, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopStoreProvider