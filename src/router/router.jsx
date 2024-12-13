import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import Addjob from "../pages/Addjob/Addjob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found!</h2>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/jobs/:id',
            element:
            <PrivateRoute>
               <JobDetails></JobDetails>
            </PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },{
          path:'/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>

        },
        {
          path:'addjob',
          element: <PrivateRoute><Addjob></Addjob></PrivateRoute>

        },
        {
          path:'/myApplications',
          element: <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        },
        {
            path:'register',
            element: <Register></Register>
        },
        {
            path:'signin',
            element: <SignIn></SignIn>
        },
        
    ]
  },
]);

export default router;
