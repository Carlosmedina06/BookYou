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
import { Dash } from './components/DashBoard/Dash'
import { UserEdit } from './components/DashBoard/UserEdit/UserEdit'
import { BookEdit } from './components/DashBoard/BookEdit/BookEdit'
import { CommentEdit } from './components/DashBoard/CommentEdit/CommentEdit'
import { Statistics } from './components/DashBoard/Statistics/Statistics'

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
        path: '/graphic',
        element: <Dash />
      },
      {
        path: '/userEdit',
        element: <UserEdit/>
      },
      {
        path: '/bookEdit',
        element: <BookEdit/>
      },
      {
        path: '/commentEdit',
        element: <CommentEdit/>
      },
      {
        path: '/statistics',
        element: <Statistics/>
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
