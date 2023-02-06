 import React, { useState } from "react";
 import ReactDOM, {createElement} from 'react-dom/client';
 import Header from './components/Header';
 import Body from './components/Body';
 import Footer from "./components/Footer";
 import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
 import About from "./components/About";
 import Error from "./components/Error";
import Contact from "./components/contact";
import Instamart from "./components/Instamart.js";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./components/userContext";

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
      const[user, setUser] = useState({
         name:"Michi",
         email:"michi@email.com",
      });
      return(<>
      <userContext.Provider value={{
         user:user,
         setUser: setUser,
      }}>
         <Header />
         <Outlet />
         <Footer />
      </userContext.Provider>
         
      </>);
    }

    const appRouter = createBrowserRouter([
      {
         path:"/",
         element: <AppLayout />,
         errorElement: <Error />,
         children:[
            {
               path:"/",
               element: <Body />
            },
            {
               path:"/about",
               element: <About />
            },
            {
               path:"/contact",
               element: <Contact />
            },
            {
               path:"/restaurant/:id",
               element: <RestaurantMenu />
            },
            {
               path:"/instamart",
               element: <Instamart />
            }
         ]
      },
      
    ]);


    const root = ReactDOM.createRoot(document.getElementById("root"));  
    root.render(<RouterProvider router={appRouter} />);
    

    