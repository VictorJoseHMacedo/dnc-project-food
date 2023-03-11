import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Products from './Views/Products/Products';
import { PRODUCTS_MOCK } from "./mock/foods.mock";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Products data={PRODUCTS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
