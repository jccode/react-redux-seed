
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import routes from './routes';


// import common from 'momentum-web-common';
// console.log(common);


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,

    document.getElementById("root")
);

