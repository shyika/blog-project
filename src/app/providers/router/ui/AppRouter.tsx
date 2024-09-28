import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route path={path} element={element} key={path} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;
