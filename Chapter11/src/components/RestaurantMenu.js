import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    
    return( (!restaurantDetails)?<Shimmer />:<div className="restaurant-details"><div>
        <h1>Restaurant id: {id}</h1>
        <h1>{restaurantDetails?.name}</h1>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantDetails?.cloudinaryImageId} alt="photo" />
        <h2>{restaurantDetails?.city}</h2>
        <h3>{restaurantDetails.costForTwoMsg}</h3>
    </div>
    <div>
        <h2>Menu</h2>
        <ul>
            {Object.values(restaurantDetails?.menu?.items).map((menu) =>{
                    return (<li key={menu.id}>{menu.name}</li>);
            })}
        </ul>
    </div>
    </div>);
}


export default RestaurantMenu;