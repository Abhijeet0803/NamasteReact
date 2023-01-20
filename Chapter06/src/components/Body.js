import RestaurantCard from './RestaurantCard';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () =>{
    const [searchText, setSearchText] = useState();
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect(()=>{
        getRestaurants();
        
        
    },[]);
    console.log("render")

    // early return 
    if(allRestaurants.length === 0) return null;

    if(filteredRestaurants.length === 0)    return <h1> No Match found...</h1>;

    //Conditional Rendering
    return ( allRestaurants?.length === 0? <Shimmer />:
    <>
    <div className='searchBar'>
        <input type="text" className='searchInput' value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
        <button type="btn" onClick={()=>{
            const filterdata =  allRestaurants.filter((r)=>r.data.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filterdata);
        }}>Search</button>
    </div>    
    <div className="restaurantLists">
       {filteredRestaurants.map((restaurant) => {
          return (<RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>);
       })}
    </div>
    </>);
  };

export default Body;