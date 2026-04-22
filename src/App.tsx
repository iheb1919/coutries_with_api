import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import Home from './compoennets/Home'
import CountryDetails from './compoennets/CountryDetails';
import Navbar from './compoennets/Navbar';

function Layout() {
  return <>
    <Navbar />
    <div className='px-4 py-10 '>

      <Outlet />
    </div>
  </>
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "country/:name",
          element: <CountryDetails />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App


