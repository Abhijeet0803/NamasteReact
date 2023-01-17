 import React from "react";
 import ReactDOM, {createElement} from 'react-dom/client';
 

    const Title = () => (<h1 
    key="h1" id="h1" 
    >Hello JSX!!</h1>);

    const Heading = () => (<>
    <Title />
    <h1>Hello, functional component</h1>
    <h2>This is h2 tag</h2>
    </>);

    const root = ReactDOM.createRoot(document.getElementById("root"));  
    root.render(Heading());
    

    