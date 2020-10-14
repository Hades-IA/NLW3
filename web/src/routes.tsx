import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/homepage';
import OrfMap from './pages/orfanatosmap';
function Routes() {
    return (
        <BrowserRouter>

            <Switch>

                <Route path='/' exact component={Home} />
                <Route path='/orfanatos-mapa' component={OrfMap} />

            </Switch>

        </BrowserRouter>
    )
}


export default Routes;