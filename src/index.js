import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your pages
import ErrorPage from './pages/Error';
import ProjectsPage from './pages/Projects';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';
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
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
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
