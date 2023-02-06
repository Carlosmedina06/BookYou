import { createHashRouter } from 'react-router-dom'

import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Usuario } from './components/Usuario/Usuario'
import { CreateUser } from './components/CreateUser/CreateUser'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import PostBook from './components/FormBookCreate/formBook'
import MainPage from './components/Landing/index'
import NotFound from './components/NotFound/NotFound'
import Success from './components/Success/Success'
import Layout from './layout/Layout'
import { UserEdit } from './components/DashBoard/UserEdit/UserEdit'
import { BookEdit } from './components/DashBoard/BookEdit/BookEdit'
import { CommentEdit } from './components/DashBoard/CommentEdit/CommentEdit'
import { Statistics } from './components/DashBoard/Statistics/Statistics'
import { AllUsers } from './components/DashBoard/AllUsers/allUsers'
import { AllBooksUsers } from './components/DashBoard/AllBooks/allBooks'
import DashBoardMain from './components/DashBoard/dashBoardMain/'
import Suscripcion from './components/Suscripcion/Suscripcion'
import UserAccount from './components/userAccount/userAccount'

import PageViews from './components/DashBoard/PageViews/visitCounter'
import FormBookUpdate from './components/FormBookUpdate/FormBookUpdate'


const App = createHashRouter([
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
        path: '/usuario/:id',
        element: <Usuario />,
      },
      {
        path: '/cuenta',
        element: <UserAccount />,
      },
      {
        path: '/createUser',
        element: <CreateUser />,
      },
      {
        path: '/dashboard/statistics',
        element: <Statistics />,
      },
      {
        path: '/dashboard/usuarios/userEdit',
        element: <UserEdit />,
      },
      {
        path: '/dashboard/books/bookEdit',
        element: <BookEdit />,
      },
      {
        path: '/books',
        element: <AllBooksUsers />,
      },
      {
        path: '/usuarios',
        element: <AllUsers />,
      },
      {
        path: '/dashboard/comentarios/commentEdit',
        element: <CommentEdit />,
      },
      /*   {
        path: '/statistics',
        element: <Statistics />,
      }, */

      {
        path: '/bookdetail/:id',
        element: <Bookdetail />,
      },
      {
        path: '/book/edit/:id',
        element: <FormBookUpdate />,
      },
      {
        path: '/createbook',
        element: <PostBook />,
      },
      {
        path: '/suscripcion',
        element: <Suscripcion />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '/dashboard/:select',
        element: <DashBoardMain />,
      },
      {
        path: '/pageviews',
        element: <PageViews />,
      },
    
    ],
  },
])

export default App
