const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) =>{

    return(<div className="w-52 h-80 p-2 m-2 shadow-md bg-pink-50 hover:bg-pink-100">
       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
       +cloudinaryImageId} alt="logo" />
       <h2 className="font-bold text-xl">{name}</h2>
       <h4 className="font-thin">{cuisines?.join(", ")}</h4>
       <h4>{avgRating} Stars</h4>
    </div>);
  };

export default RestaurantCard;