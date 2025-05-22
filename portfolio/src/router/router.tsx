import Layout from '@/components/layout/Layout';
import CssUnits from '@/pages/cssUnits/CssUnits';
import Home from '@/pages/home/Home';
import Resume from '@/pages/resume/Resume';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/resume', element: <Resume /> },
            { path: '/css', element: <CssUnits /> },
        ],
    },
]);
