import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/food_villa.png"

 const Title = () => (<Link to={"/"}>
    <img className="logo" alt="logo" 
    src={Logo} />
    </Link>);

const Header = () =>{
  
  const [islogin, setIsLogin] = useState(false);

  // useEffect(()=>{
  //   console.log("useEffect");
  // });
 // console.log(useState());

  return(<div className="header">
    <Title />
    <div className="nav-items">
      <ul>
         <li><Link to={"/"}>Home</Link></li>
         <li><Link to={"/about"}>About</Link></li>
         <li><Link to={"/contact"}>Contact</Link></li>
         <li>Cart</li>
         <li>{islogin?<button onClick={()=>setIsLogin(false)}>Logout</button>:<button onClick={()=>setIsLogin(true)}>Login</button>}</li>
      </ul>
    </div>
    </div>)};

export default Header;