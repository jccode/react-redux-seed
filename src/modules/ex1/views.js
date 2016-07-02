import React, {Component} from 'react';

export const Main = (props) => (
    <div>
        <MyContainer/>
        <br/>
        <Parent/>
    </div>
);


/**
 * Demostrate the communication between parent and child components.
 *
 * 1. parent -> child:   via props
 * 2. child -> parent:   via callback reference
 *
 * ref:
 *  - http://ctheu.com/2015/02/12/how-to-communicate-between-react-components/
 *  - https://facebook.github.io/react/tips/communicate-between-components.html
 */
class MyContainer extends Component {
    state = {checked: true};

    constructor() {
        super();
    }

    onChildUpdated(value) {
        console.log(`paren, children new state: ${value}`);
        this.setState({
            checked: value
        });
    }

    render() {
        return (
            <ToggleButton text="Toggle me" checked={this.state.checked} notifyParent={this.onChildUpdated.bind(this)}/>
        )
    }
}

class ToggleButton extends Component {

    constructor(props) {
        super(props);
    }

    onTextChange(event) {
        const {notifyParent, checked} = this.props;
        const newState = !checked;
        notifyParent(newState);
    }

    render() {
        const {text, checked} = this.props;
        return (
            <label>
                {text}:
                <input type="checkbox" checked={checked} onChange={this.onTextChange.bind(this)}/>
            </label>
        )
    }
}



/**
 * Hierarchy problem.
 * Pass down a prop to a grandson.
 *
 * Solution: via context
 */
class Parent extends Component {

    static childContextTypes = {
        text: React.PropTypes.string
    };

    getChildContext() {
        return {
            text: "Where is my son?"
        }
    }

    render() {
        return <Intermediate/>
    }
}

class Intermediate extends Component {
    render() {
        return <Child/>;
    }
}

class Child extends Component {
    static contextTypes = {
        text: React.PropTypes.string
    };

    render() {
        return (
            <span>{this.context.text}</span>
        )
    }
}