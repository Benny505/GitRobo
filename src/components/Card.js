import React from "react";

const Card = (props) => { // props are the props that are sent from CardList.js
    const {name, email, id} = props // this is destructuring props into its components. the names must match up with prop's names you can also destructure props right inside the brackets you just put the elements you want to destructure: {name, email, id}    return( // this can only return one thing (wrap everything in a div)
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
            <img src={`https://robohash.org/${id}` /* this is an embeded string allowing for interior code */} width="200px" height="200px" alt="RoboCoolio" />
            <div>
                <h2>{name}</h2>
                <p>{email /* any javascript expression in jsx must have these curly brackets */}</p>
            </div>
        </div>
    ); // the above is called jsx
}
// note - you can't use class in jsx use className

export default Card;