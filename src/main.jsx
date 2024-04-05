import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//ROTAS:
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Error from './routes/Error.jsx'

const routes = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/login", element: <Login /> },
      { path: "/sobre", element: <Sobre /> }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
