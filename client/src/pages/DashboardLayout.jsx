import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App"
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";



export const loader = async() => {
  try{
    const {data} = await customFetch.get('/users/current-user')
    return data;
  }catch(error){
    return redirect('/')
  }
}

const DashboardContext = createContext()


const DashboardLayout = () => {

  const {user} = useLoaderData();

  const navigate = useNavigate();

 const [showSidebar, setShowSidebar] = useState(false);
 const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme);
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async() => {
    navigate('/')
    await customFetch.get('/auth/logout')
    toast.success('Logging out..')
  }
 
 

  return (
      <div>
        
        
          {/* <SmallSidebar/>
          <BigSidebar/> */}


          <div>
         
            <div >
              <Outlet context={{user}}/>

            </div>
          </div>
        
       


      </div>
  )
}
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout