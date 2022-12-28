import { Badge } from "@nextui-org/react"
import { AiFillStar } from "react-icons/ai"
import Currency from 'react-currency-formatter';
import { Link } from "react-router-dom";


const Product = ({product}) => {
  return (
    <Link className="border p-2.5 rounded-lg">
        <div className="w-full h-[200px] relative overflow-hidden">
        <Badge color="success" className="absolute top-2 left-3 z-50" variant="bordered">{product.category}</Badge>
            <img src={product.image} alt="product image" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />
        </div>
        <h2 className="text-base font-medium mt-2">{product.title.slice(0,40)}...</h2>
        <div className="mt-1.5 flex items-center space-x-2">
            <AiFillStar className="text-orange-600" />
            <span className="text-emerald-800">({product.rating.rate})</span>
            <span>{product.rating.count}</span>
        </div>
        <h4 className="mt-1 font-bold"><Currency
  quantity={product.price}
  currency="USD"
/></h4>
    </Link>
  )
}

export default Product