import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import DailyTasks from './components/DailyTasks/DailyTasks'
import Settings from './components/Settings/Settings'
import Profile from './components/Profile/Profile'
import Project from './components/ProjectDetailPage/ProjectDetailPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'



export default function App() {


  // Routing
  let router = createBrowserRouter([
    {path : '' , element : <Layout/> , children : [
      {index : true , element : <Home/>},
      {path : 'DailyTasks' , element : <DailyTasks/>},
      {path : 'Profile' , element : <Profile/>},
      {path : 'Settings' , element : <Settings/>},
      {path : 'Project' , element : <Project/>},
      {path : 'Login' , element : <Login/>},
      {path : 'Register' , element : <Register/>},
      {path : '*' , element : <NotFoundPage/>}
    ]}
  ])  
 

  return <> 
    <RouterProvider router={router}></RouterProvider>
    
  </>
}

