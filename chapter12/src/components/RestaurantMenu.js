import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import Shimmer from './Shimmer';



const RestaurantMenu = () =>{
   // console.log(useParams());
    const {id} = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    async function getRestaurantDetails(id){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId="+id);
        const json = await data.json();
        //console.log(json);
        setRestaurantDetails(json.data);
    }
    useEffect(() =>{
        getRestaurantDetails(id);
    },[]);

    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }

    
    return( (!restaurantDetails)?<Shimmer />:<div className="flex"><div>
        <h1>Restaurant id: {id}</h1>
        <h1>{restaurantDetails?.name}</h1>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantDetails?.cloudinaryImageId} alt="photo" />
        <h2>{restaurantDetails?.city}</h2>
        <h3>{restaurantDetails.costForTwoMsg}</h3>
    </div>
    <div className="pl-5">
        <h2>Menu</h2>
        <ul>
            {Object.values(restaurantDetails?.menu?.items).map((item) =>{
                    return (<li className="m-3" key={item.id}>{item.name} - <button className="pl-1 pr-1 pb-1 text-2xl  rounded-full hover:bg-green-300 bg-green-100" onClick={() => handleAddItem(item)}>+</button></li>);
            })}
        </ul>
    </div>
    </div>);
}


export default RestaurantMenu;