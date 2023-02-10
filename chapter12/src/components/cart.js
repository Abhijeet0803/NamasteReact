import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../utils/cartSlice";
import OrderItem from "./OrderItem";

const Cart = () =>{

    const orderItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearItems = () =>{
        dispatch(clearCart());
    }

    return <div>
        <h1 className="font-bold text-3xl">Cart Items</h1>
        <button className="p-1 m-2 bg-red-800 text-white rounded-lg" onClick={() => handleClearItems()}>Clear Items</button>
        <div>
            {orderItems?.map((item)=> {
                return (<OrderItem key={item.id} {...item} />);
            })}
            
        </div>
    </div>
}

export default Cart;