import React from 'react';
import { Route, IndexRoute } from 'react-router';
import app from './modules/app';
import licai, { actions } from './modules/licai';
import ex1 from './modules/ex1';


const routes = (
    <Route path="/" component={app.views.App}>
        <IndexRoute component={app.views.Home} />
        <Route path="about" component={app.views.About} />
        <Route path="licai" component={licai.views.LicaiProducts} />
        <Route path="ex1" component={ex1.views.Main} />
    </Route>
);

export default routes;