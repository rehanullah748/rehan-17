import { useEffect } from "react"
import axios from "axios"
import { CLOSE_LOADER, PRODUCTS } from "../store/Actions"
import { useShopContext } from "../store/ShopStore"
import { Loading } from "@nextui-org/react"
import Product from "../components/Product"
const Home = () => {
  const {state, dispatch} = useShopContext();
  const {loader, products} = state;
  const fetchProducts = () => {
       axios.get('https://fakestoreapi.com/products').then(({data}) => {
        dispatch({type: CLOSE_LOADER, payload: false});
        dispatch({type: PRODUCTS, payload: data})
       }).catch(err => {
        dispatch({type: CLOSE_LOADER, payload: false});
       })
  }
 useEffect(() => {
    fetchProducts();
 }, [])
  return (
    <div className="max-w-screen-xl mx-auto my-10">
     {loader ? <div className="w-full text-center"><Loading color={'success'} size="lg" /></div>: 
     <div>
      <p className="bg-emerald-50 px-4 py-2 rounded border border-emerald-100 text-emerald-800 font-medium">{products.length} products found</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
     </div>
     }
    </div>
  )
}

export default Home