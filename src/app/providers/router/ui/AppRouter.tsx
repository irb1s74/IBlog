import {Suspense} from 'react';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from 'widgets/PageLoader/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader/>}>
        <Routes>
            {Object.values(routeConfig).map(({path, element}) => (
                <Route key={path} path={path} element={element}/>
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
