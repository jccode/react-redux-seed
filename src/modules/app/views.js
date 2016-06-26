import React, {Component} from 'react';
import {Link} from 'react-router';


class App extends Component {

    static propTypes = {
        children: React.PropTypes.any
    };

    constructor() {
        super();
    }

    render () {
        return (
            <section>
                <h1>Header here</h1>
                {this.props.children}
                <p>footer here</p>
            </section>
        );
    }
}

const About = (props) =>
        <div>
            <p className="item">About page.</p>
            <input type="file" name="file"/>
        </div>
    ;


class Home extends Component {

    render() {
        return (
            <div>
                Home
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/licai">Licai</Link></li>
                </ul>
            </div>
        )
    }
}


export {App, Home, About};
