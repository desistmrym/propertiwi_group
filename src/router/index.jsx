import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Home from '../container/Home';
import Project from '../container/Project';
import About from '../container/Tentang-Kami';
import Contact from '../container/Contact';

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
            {
                path: '/proyek',
                element: <Project />
            },
            {
                path: '/tentang-kami',
                element: <About />
            },
            {
                path: '/kontak-karir',
                element: <Contact />
            },
        ]
    },
    {
        path: '*',
        element: <div>404 Not Found</div>,
    },
]);

export default router; 