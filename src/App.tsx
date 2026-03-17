import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    loader: async () => {
      const response = await fetch('/data/indonesia_regions.json');
      if (!response.ok) {
        throw new Error('Failed to load regions data');
      }
      return response.json();
    },
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
