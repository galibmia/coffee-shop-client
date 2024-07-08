import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layouts/Main.jsx';
import Error from './components/Error.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import Edit from './components/Edit.jsx';
import View from './components/View.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://coffee-shop-server-376z.onrender.com/coffees')
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'update-coffee/:id',
        element: <Edit></Edit>,
        loader: ({params}) => fetch(`https://coffee-shop-server-376z.onrender.com/coffees/${params.id}`)
      },
      {
        path: 'view-coffee/:id',
        element: <View></View>,
        loader: ({params}) => fetch(`https://coffee-shop-server-376z.onrender.com/coffees/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
