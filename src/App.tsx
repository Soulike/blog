import React, {Suspense} from 'react';
import Loading from './Component/Loading';

const Router = React.lazy(() => import('./Router'));

function App()
{
    return (
        <Suspense fallback={<Loading />}>
            <Router />
        </Suspense>
    );
}

export default React.memo(App);