import {Link} from 'react-router-dom';
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
   //console.log("body")

    // early return 
    if(allRestaurants.length === 0) return <Shimmer/>;

    if(filteredRestaurants.length === 0)    return <h1> No Match found...</h1>;

    //Conditional Rendering
    return ( //allRestaurants?.length === 0? <Shimmer />:
    <>
    <div className='p-4 my-4 bg-pink-100'>
        <input type="text" className='searchInput' value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
        <button className='mx-2 px-2 py-1 bg-purple-800 text-white rounded-lg' type="btn" onClick={()=>{
            const filterdata =  allRestaurants.filter((r)=>r?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
            setFilteredRestaurants(filterdata);
        }}>Search</button>
    </div>    
    <div className="restaurantLists flex flex-wrap">
       {filteredRestaurants.map((restaurant) => {
          return (<Link to={"/restaurant/"+restaurant.data.id} key = {restaurant.data.id}><RestaurantCard {...restaurant.data}/></Link>);
       })}
    </div>
    </>);
  };

export default Body;