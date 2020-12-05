import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../Component/NotFound';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../CONFIG';
import Loading from '../Component/Loading';

const Frame = React.lazy(() => import('../Component/Frame'));

export default () =>
{
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Frame>
                    <Switch>
                        {
                            Object.values(PAGE_ID).map(id =>
                            {
                                return (
                                    <Route key={id} exact={true} path={PAGE_ID_TO_ROUTE[id]}
                                           component={PAGE_ID_TO_COMPONENT[id]} />);
                            })
                        }
                        <Route render={NotFound} />
                    </Switch>
                </Frame>
            </Suspense>
        </BrowserRouter>
    );
};