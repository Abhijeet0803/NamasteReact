import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../constants';
import { useState } from 'react';

const Body = () =>{
    const [searchText, setSearchText] = useState();
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
    <>
    <div className='searchBar'>
        <input type="text" className='searchInput' value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
        <button type="btn" onClick={()=>{
            const filterdata =  restaurantList.filter((r)=>r.data.name.toLowerCase().includes(searchText.toLowerCase()));
            setRestaurants(filterdata);
        }}>Search</button>
    </div>    
    <div className="restaurantLists">
       {restaurants.map((restaurant) => {
          return (<RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>);
       })}
    </div>
    </>);
  };

export default Body;