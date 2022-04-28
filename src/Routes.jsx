import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import LoaderComponent from './components/Loader';
const HomePage = lazy(() => import('./pages/HomePage'));

const MyRoutes = () => {
  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MyRoutes;
