// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { MainApp } from './09-useContext/MainApp'
import {AboutPage, HomePage, LoginPage} from './09-useContext/pages';
import ErrorPage from './09-useContext/pages/ErrorPage';
// import { TodoApp } from './08-UseReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'

// import './08-UseReducer/intro-reducer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MainApp />
    <RouterProvider router={router} />
  // </React.StrictMode>
)
