import './App.css'
import { createHashRouter, RouterProvider, Outlet } from 'react-router'
import Home from './pages/Home'
import CountryDetails from './pages/CountryDetails';
import Navbar from './compoennets/Navbar';

function Layout() {
  return <>
    <Navbar />
    <main className='px-4 py-10 '>

      <Outlet />
    </main>
  </>
}

function App() {
  const router = createHashRouter([
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


