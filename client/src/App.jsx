import { createBrowserRouter } from 'react-router-dom'

import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Usuario } from './components/Usuario/Usuario'
import { CreateUser } from './components/CreateUser/CreateUser'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import PageOnConstruction from './components/PageOnConstruction/PageOnConstruction'
import PostBook from './components/FormBookCreate/formBook'
import MainPage from './components/Landing/index'
import NotFound from './components/NotFound/NotFound'
import Layout from './layout/Layout'

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/Usuario',
        element: <Usuario />,
      },
      {
        path: '/createUser',
        element: <CreateUser />,
      },
      {
        path: '/dashBoard',
        element: <DashBoard />,
      },
      {
        path: '/bookdetail/:id',
        element: <Bookdetail />,
      },
      {
        path: '/createbook',
        element: <PostBook />,
      },
      {
        path: '/pageonconstruction',
        element: <PageOnConstruction />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
])

export default App
