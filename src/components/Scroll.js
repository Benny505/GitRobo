import React from "react";

const Scroll = (props) => { // we are not passsing in any props but we are getting the children of Scroll through props
    return ( // the double braces returns an object that can hold styles, it is also using jsx so css things are modified
        <div style={{ overflowY: "scroll", height: "500px" }}> 
            {props.children}
        </div>
    );
};

export default Scroll;