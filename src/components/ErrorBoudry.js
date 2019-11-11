import React, { Component } from "react"; // destructuring. it imports React and Component from react

class ErrorBoundry extends Component { // instead of making a new class it just extends Component to include the class
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { // this paremeters represent what the error is and the info about it
        this.setState({ hasError: true });
    }
    // the function above only runs when it catches an error

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. No Good.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;