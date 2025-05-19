import { createHashRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/home/Home';
import Cv from '@/pages/cv/Cv';
import CssUnits from '@/pages/cssUnits/CssUnits';

export const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/cv', element: <Cv /> },
            { path: '/css', element: <CssUnits /> },
        ],
    },
]);
