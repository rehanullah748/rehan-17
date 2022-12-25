import { useContext } from "react"
import { ShopContext } from "../store/ShopStore"
const Home = () => {
  const {state, dispatch} = useContext(ShopContext)
  console.log(state)
  const update = () => {
     dispatch({type: 'CHANGE_LOADER', payload: 'any value'});
  }
  const changeProducts = () => {
    dispatch({type: 'PRODUCTS', payload: ['item1', 'item2', 'item3']});
  }
  return (
    <div>
      <button onClick={update}>loader</button>
      <br />
      <button onClick={changeProducts}>change products array</button>
    </div>
  )
}

export default Home