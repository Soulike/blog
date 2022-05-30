import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
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
                    <Routes>
                        {
                            Object.values(PAGE_ID).map(id =>
                            {
                                const Component = PAGE_ID_TO_COMPONENT[id];
                                if (Component !== null)
                                {
                                    return (
                                        <Route key={id} path={PAGE_ID_TO_ROUTE[id]}
                                               element={<Component />} />);
                                }
                            })
                        }
                        <Route path={'*'} element={<NotFound />} />
                    </Routes>
                </Frame>
            </Suspense>
        </BrowserRouter>
    );
};