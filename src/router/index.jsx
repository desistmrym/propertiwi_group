import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../container/Home';

// Layout components (if you have any)
// import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
        ]
    },
    {
        path: '*',
        element: <div>404 Not Found</div>,
    },
]);

export default router; 