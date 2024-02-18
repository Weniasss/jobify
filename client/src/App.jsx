import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  EditJob,
  AllJobs,
  Profile,
  Admin,
  Test,
  AllTests,
  Discuss,
  DiscussPage,
  Leaderboard,
  AddDiscuss
} from './pages'

import { jsQuizz } from "./pages/constants"

import { action as registerAction} from './pages/Register'
import { action as loginAction} from './pages/Login'
import { loader as dashboardLoader} from './pages/DashboardLayout'
import { action as addJobAction} from './pages/AddJob'
import { loader as allJobsLoader} from './pages/AllJobs'

import { action as editJobAction} from './pages/EditJob'
import { loader as editJobLoader} from './pages/EditJob'
import { action as deleteJobAction } from './pages/DeleteJob';
import {loader as adminLoader} from './pages/Admin'
import {loader as statsLoader} from './pages/Stats'
import {loader as testLoader} from './pages/AllTests'
import {loader as testSingleLoader} from './pages/Test'
import {loader as discussLoader} from './pages/Discuss'
import {loader as discussPageLoader} from './pages/DiscussPage'

import {action as discussPageAction} from './pages/DiscussPage'

import {action as addDiscuss} from './pages/AddDiscuss'
import {action as addResult} from './pages/Test'

import {loader as loaderProfile} from './pages/Profile'
import {loader as loaderLeaderboard} from './pages/Leaderboard'



export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';

  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme

}

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing/>

      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children:[
          {
            index: true,
            element: <AddJob/>,
            action: addJobAction
          },
          {
            path: 'stats',
            element: <Stats/>,
            loader:statsLoader
          },
          {
            path: 'tests',
            element: <AllTests />,
            loader: testLoader
          },
          {
            path: 'discuss',
            element: <Discuss />,
            loader: discussLoader
          },
          {
            path: 'discuss/:id',
            element: <DiscussPage />,
            loader: discussPageLoader,
            action: discussPageAction
          },
          {
            path: 'add-discuss',
            element: <AddDiscuss />,
            action: addDiscuss
          },
          {
            path: 'test/:id',
            element: <Test questions={jsQuizz.questions}/>,
            loader: testSingleLoader,
            action: addResult
          },
          {
            path: 'all-jobs',
            element: <AllJobs/>,
            loader: allJobsLoader
          },
          {
            path:'profile/:id',
            element: <Profile/>,
            loader: loaderProfile
          },
          {
            path: 'leaderboard',
            element: <Leaderboard />,
            loader: loaderLeaderboard
          },
          {
            path: 'admin',
            element: <Admin/>,
            loader: adminLoader
          },
          {
            path:'edit-job/:id',
            element: <EditJob/>,
            loader: editJobLoader,
            action: editJobAction,
          },
          { path: 'delete-job/:id', action: deleteJobAction },
        ]
      },
    ]
  },
  
  
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App

