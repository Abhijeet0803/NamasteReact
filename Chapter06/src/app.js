 import React from "react";
 import ReactDOM, {createElement} from 'react-dom/client';
 import Header from './components/Header';
 import Body from './components/Body';
 import Footer from "./components/Footer";

 {
   /* PLANNING
      -Header
         -Logo
         -Nav Items(Right Side)
         -Cart
      -Body
         -Search Bar
         -Restaurant Cards
            - Image
            - Name
            - Cuisines
            - Rating
      -Footer
         -Links
         -Copyrights

   */   
 }
 

    
 




  

    const AppLayout = () =>{
      return(<>
         <Header />
         <Body />
         <Footer /> 
      </>);
    }


    const root = ReactDOM.createRoot(document.getElementById("root"));  
    root.render(<AppLayout />);
    

    