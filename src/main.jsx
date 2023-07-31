import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home/Home.jsx'
import Terms  from './pages/Terms/Terms.jsx'
import PageNotFound from './pages/404/404.jsx'
import Vote from './pages/Vote/Vote.jsx'

import './App.scss'
import './normalize.css'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App.jsx'

const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound/>,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/condiciones",
    element: <Terms />,
  },
  {
    path: "/votar",
    element: <Vote />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
