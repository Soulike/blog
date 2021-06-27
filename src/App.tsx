import React, {Suspense} from 'react';
import Loading from './Component/Loading';
import Router from './Router';

function App()
{
    return (
        <Suspense fallback={<Loading />}>
            <Router />
        </Suspense>
    );
}

export default React.memo(App);