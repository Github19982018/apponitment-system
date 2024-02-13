import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter,  RouterProvider, } from "react-router-dom";
import { Root } from './routes/Root.tsx';
import { CustomerLogin } from './components/Login/customerLogin.tsx';
import { SignUp } from './components/SignUp/SignUp.tsx';
import { AdminLogin } from './components/Login/AdminLogin.tsx';
import { Index } from './pages/index.tsx';
import { OpenEvents, loader as openEventLoader } from './pages/OpenEvents/OpenEvent.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
      path: "me",
      element: <Index />,
      // loader: contactLoader,
      // action: editAction,
    },
      {
      path: "event/:accountId",
      element: <OpenEvents />,
      loader: openEventLoader,
      // action: editAction,
    }
    ]

},
  {
    path:"/signin/customer",
    element:<CustomerLogin />
  },

  {
    path:"/signin/admin",
    element:<AdminLogin />
  },
  
  {
    path:"/signup",
    element:<SignUp />
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
</React.StrictMode>,
)
