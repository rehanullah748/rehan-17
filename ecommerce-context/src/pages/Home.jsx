import { useContext, useEffect } from "react"
import axios from "axios"
import { ShopContext } from "../store/ShopStore"
const Home = () => {
  const {state, dispatch} = useContext(ShopContext)
  const fetchProducts = () => {
       axios.get('https://fakestoreapi.com/products').then(({data}) => {
        dispatch({type: 'CLOSE_LOADER', payload: false});
        dispatch({type: 'PRODUCTS', payload: data})
       }).catch(err => {
        dispatch({type: 'CLOSE_LOADER', payload: false});
       })
  }
 useEffect(() => {
    fetchProducts();
 }, [])
 console.log(state)
  return (
    <div>
     all products
    </div>
  )
}

export default Home