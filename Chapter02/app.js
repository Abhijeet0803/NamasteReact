 import React from "react";
 import ReactDOM from 'react-dom';
 /**********using JS and DOM  manipulation*************/

    // const heading = document.createElement("h1");
    // heading.innerHTML="Hello World!!";
    // const root = document.getElementById("root");
    // root.appendChild(heading);

    // If we consider till this line and remove the comments then this is the smallest react code with 
    // all the powers of React and ReactDOM

    const heading = React.createElement("h1", {},"Hello React1!!");
    const root = ReactDOM.createRoot(document.getElementById("root"));  // WE are telling react that this is my root we have to implement our react code.
   // root.render(heading);   //here we are telling to insert heading inside react;

    // What ever written inside root will be overriden by this react code. it will not append but overrride the code.

    const styles = {
    color: "red",
    background: "#0f0",
    fontSize: "32px"
    };
    const heading2 = React.createElement("h2", {}, "heading2"); 
    const heading3 = React.createElement("h3", {}, "heading3");
    const div = React.createElement("div", {
        id: "header",
        style:{styles}
    }, [heading2, heading3]);
    //whatever written inside {} will go into the properties/attributes of HTML tag
    root.render(div);
    //root.render([heading,heading2,heading3]);   // We can write this way also 

    // We can write multiple render functions but whatever written inside last root will be seen in browser.