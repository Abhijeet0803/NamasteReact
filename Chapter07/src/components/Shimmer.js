const Shimmer = () =>{
    return(<div className="restaurantLists">
        {Array(12).fill("").map((e, index)=><div className="shimmer_card" key={index}></div>)}
        
    </div>)
}

export default Shimmer;