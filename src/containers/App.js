import CardList from "../components/CardList";
import { connect } from "react-redux";
// import {robots} from "./robots"; <-- (not in use) this is an example of destructuring, we didn't use default to export so we may have more than one export to grab
import SearchBox from "../components/SearchBox";
import React from "react";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoudry";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => { // the state is just passed from redux 
    return { // using curly brackets because we are returning an object
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => { // dispatch is needed in the brackets to be able to be called
    return {
        onSearchChanged: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

    componentDidMount() { // react components do not require arrow functions
        this.props.onRequestRobots();
    }

    // onSearchChanged = (event) => {  use this syntax (on current line) so that "this" will refer to the obj it is in and not whereever it is being called from
    //     this.setState({searchField: event.target.value})  state must be called state in takes no other name (setState)
    // } not using the function but there is still usefull info

    render() {
        console.log(this.props.robots);
        const filterBot = this.props.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()); // props is refering to whatever is being passed into the Function/parent function usually through jsx
        })
        if (this.props.isPending){
            return <h1>Loading...</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className="pa2">RoboFriends</h1>
                    <SearchBox searchChange={this.props.onSearchChanged} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect is a higher order function (function that returns another function)
// this function will run whatever is in the first set of brackets with whatever is in the second set