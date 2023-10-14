import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your pages
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ResumePage from './pages/Resume';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
