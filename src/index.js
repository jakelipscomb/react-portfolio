import './assets/main.css';
import App from './App';
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ResumePage from './pages/Resume';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/About',
        element: <AboutPage />,
      },
      {
        path: '/Projects',
        element: <ProjectsPage />,
      },
      {
        path: '/Resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
