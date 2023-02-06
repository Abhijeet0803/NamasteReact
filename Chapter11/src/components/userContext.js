import { createContext } from "react";

const userContext = createContext({
    user:{
        name:"Abhijeet",
        email:"abhi@gmail.com",
    }
});

userContext.displayName="UserContext";

export default userContext;