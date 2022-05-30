import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../Component/NotFound';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../CONFIG';

const Frame = React.lazy(() => import('../Component/Frame'));

export function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Frame />}>
                    {
                        Object.values(PAGE_ID).map(id =>
                        {
                            const Component = PAGE_ID_TO_COMPONENT[id];
                            return Component === null
                                ? null
                                : <Route key={id} path={PAGE_ID_TO_ROUTE[id]}
                                         element={<Component />} />;
                        })
                    }
                </Route>
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}