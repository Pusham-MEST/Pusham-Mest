import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import Home from "./home"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import Menu from "./pages/menu"
import AlertPage from "./pages/alertPage"
import SignUpAlerts from "./home/components/signUpAlert"
import AdminDashboard from "./home/components/adminDashboard"


function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <RootLayout/>,
      children:[
        {
          index:true,
          element: <Home />,
        },
        {
          path:"login",
          element: <Login />,
        },
        {
          path:"signup",
          element: <SignUp />,
        },
        {
          path:"menu",
          element: <Menu />,
        },
        {
          path:"alert",
          element: <AlertPage />,
        },
        {
          path:"SignUpAlerts",
          element: <SignUpAlerts />,
        },
        {
          path:"admin",
          element: <AdminDashboard />,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App