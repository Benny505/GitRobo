import React from "react";
import Card from "./Card";
import ErrorBoundry from "./ErrorBoudry";

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOf");
    // }
    const cardComponent = robots.map((user, i) => { // key is something that has to be used so the virtual dom can identify each object
        return(
            <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        );
    });
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;