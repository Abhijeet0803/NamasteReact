const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) =>{

    return(<div className="card">
       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
       +cloudinaryImageId} alt="logo" />
       <h2>{name}</h2>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating} Stars</h4>
    </div>);
  };

export default RestaurantCard;