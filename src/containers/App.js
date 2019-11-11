import CardList from "../components/CardList";
// import {robots} from "./robots"; <-- (not in use) this is an example of destructuring, we didn't use default to export so we may have more than one export to grab
import SearchBox from "../components/SearchBox";
import React from "react";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoudry";

class App extends React.Component {
    constructor() {
        super()
        this.state = { // the state is known as something that can change and that describes our app (the name can still be anything)
            robots: [], // something with state is called a smart component
            searchField: ""
        }
    }

    componentDidMount() { // react components do not require arrow functions
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json();
        }).then(users => {
            this.setState({ robots: users })
        });
    }

    onSearchChanged = (event) => { // use this syntax (on current line) so that "this" will refer to the obj it is in and not whereever it is being called from
        this.setState({searchField: event.target.value}) // state must be called state in takes no other name (setState)
    }


    render() {
        const filterBot = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className="pa2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChanged} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterBot} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            ); // the slash after CardList is just standard syntax for a self closing tag in js
        } 
    }
}

export default App;