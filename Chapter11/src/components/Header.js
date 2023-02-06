import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/food_villa.png"
import userContext from "./userContext";

 const Title = () => (<Link to={"/"}>
    <img className="h-28 p-2" alt="logo" 
    src={Logo} />
    </Link>);

const Header = () =>{
  
  const [islogin, setIsLogin] = useState(false);

  // useEffect(()=>{
  //   console.log("useEffect");
  // });
 // console.log(useState());

 const {user} = useContext(userContext);

  return(<div className="flex justify-between px-4 bg-pink-100 shadow-md">
    <Title />
    <div>
      <ul className="flex justify-between py-10">
         <li className="px-2"><Link to={"/"}>Home</Link></li>
         <li className="px-2"><Link to={"/about"}>About</Link></li>
         <li className="px-2"><Link to={"/contact"}>Contact</Link></li>
         <li className="px-2">Cart</li>
         <li className="px-2"><Link to={"/instamart"}>Instamart</Link></li>
        <li>{user.name}</li>
         <li className="px-2">{islogin?<button onClick={()=>setIsLogin(false)}>Logout</button>:<button onClick={()=>setIsLogin(true)}>Login</button>}</li>
      </ul>
    </div>
    </div>)};

export default Header;