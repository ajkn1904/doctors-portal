import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Appointment from '../Pages/Appointment/Appointment';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Dashboard from '../Pages/Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../Layout/DashboardLayout';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AddDoctor from '../Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './AdminRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
        ] 
    }
])

export default router;