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
import { useState } from 'react'



export default function App() {


  const [allTasks, setAllTasks] = useState([
    { id: 1, text: "تصميم الصفحة الرئيسية", completed: true },
    { id: 2, text: "تصميم الصفحة الرئيسية", completed: true },
    { id: 3, text: "تصميم السلة", completed: true },
    { id: 4, text: "تصميم وسائل الدفع", completed: true },
    { id: 5, text: "تصميم الصفحة الرئيسية", completed: false },
    // يمكنك إضافة المزيد من المهام هنا
  ]);
    const handleToggleTask = (idToToggle) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Routing
  let router = createBrowserRouter([
    {path : '' , element : <Layout/> , children : [
      {index : true , element : <Home/>},
      {path : 'DailyTasks' , element : <DailyTasks/>},
      {path : 'Profile' , element : <Profile/>},
      {path : 'Settings' , element : <Settings/>},
      {path : 'Project' , element : <Project handleToggleTask={handleToggleTask} allTasks={allTasks}/>},
      {path : 'Login' , element : <Login/>},
      {path : 'Register' , element : <Register/>},
      {path : '*' , element : <NotFoundPage/>}
    ]}
  ])  
 

  return <> 
    <RouterProvider router={router}></RouterProvider>
    
  </>
}

