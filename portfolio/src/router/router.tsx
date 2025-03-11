import { createHashRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/home/Home';
import Cv from '@/pages/cv/Cv';

export const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/cv', element: <Cv /> },
        ],
    },
]);
