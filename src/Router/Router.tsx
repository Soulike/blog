import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../Component/NotFound';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../CONFIG/PAGE';

export default () =>
{
    return (
        <BrowserRouter>
            <Switch>
                {
                    Object.values(PAGE_ID).map(id =>
                    {
                        return (
                            <Route exact={true} path={PAGE_ID_TO_ROUTE[id]}
                                   component={PAGE_ID_TO_COMPONENT[id]} />);
                    })
                }
                <Route render={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};