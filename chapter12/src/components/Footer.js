import { useContext } from "react";
import userContext from "./userContext";

const Footer = () =>{

  const {user} = useContext(userContext);

    return (<h4>This site is developed by {user.name}</h4>)
  };

  export default Footer;
