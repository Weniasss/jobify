import React, { useContext, useState } from 'react'
import customFetch from '../utils/customFetch'
import { useLoaderData, useOutletContext } from 'react-router-dom'
import { createContext } from 'react'
import TestsContainer from './TestsContainer'
import { Navbar } from '../components'
import { AiOutlineTag } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { IoLogoAppleAr } from "react-icons/io5";
import { Form, useSubmit, Link } from 'react-router-dom';
import { useDashboardContext } from "../pages/DashboardLayout"
import { Select, Option } from "@material-tailwind/react";

import { Button } from '@material-tailwind/react'

export const loader = async({request}) => {

  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  console.log(params);
  
  try{
    const {data} = await customFetch.get('/tests', {
      params
    })
    return {data};
  }catch(error){
    toast.error(error?.response?.data?.msg);
    return error
  }

}



const AllTestsContext = createContext()


const AllTests = () => {
    const {data} = useLoaderData();

    const [openProfile, setOpenProfile] = useState(false);
    const { user } = useOutletContext();
    
    console.log(user._id)

    console.log(data);
    const submit = useSubmit();

    const {tests} = data;

    console.log(tests);
    const handleClick = () => {
        console.log('data');
    }

    


  return (

    <AllTestsContext.Provider value={{data}}>
        
        <div className='bg-[#201c1c] h-screen '>

        <nav class="flex items-center justify-between flex-wrap  p-3 mb-10 bg-[#34343B]">
  <div class="flex items-center flex-shrink-0 text-white mr-6 ml-16">
      <IoLogoAppleAr  size={32}/>
      
  </div>
  
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-8">
    <div class="text-sm lg:flex-grow">
      <Link to="../tests" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8 text-lg	tracking-wide	">
        Tests
      </Link>
      <Link to="../discuss" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white text-lg		tracking-normal	mr-8">
        Discuss
      </Link>
      <Link to="../leaderboard" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8 text-lg		tracking-normal	">
        Leaderboard
      </Link>
    </div>
  <div>

  <div class="relative inline-block text-left mr-16">

      
<button onClick={() => setOpenProfile(!openProfile)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white   focus:outline-none  font-medium rounded-lg text-sm px-5  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">

<div class="relative w-10 h-10 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-700 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>


</button>

{
  openProfile && <div id="dropdownHover" class="z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-22 dark:bg-gray-700 ">
  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
    <li>
    <Link to={`../profile/${user._id}`} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
    </li>
    <li>
      <Link to='/' class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log out</Link>
    </li>
  </ul>
</div>
}
</div>    </div>
  </div>
</nav>


       


        <div class="grid grid-cols-12 gap-4">
           
  <div  className='grid col-span-4 justify-center '>


  <div class=" p-5 w-96 h-80   rounded-lg bg-[#34343B]  ">
   
  <Form>

                    <input 
                    id="name" name="name"  onChange={(e) => {
                      submit(e.currentTarget.form)
                    }}
                    
                    className='bg-[#43434a] mb-2   text-sm rounded  block w-full p-2 mt-2 bg-stone-800'>
                    
                    </input>

                   <label for="countries" class="block mb-1 text-base font-medium text-gray-200 dark:text-white">Language</label>
                    <select 
                    
                    name='language'
                    id='language'
                    onChange={(e) => {
                      submit(e.currentTarget.form)
                    }}
                    
                    class="bg-[#43434a]  mb-2 text-gray-300 text-sm rounded  block w-full p-2  ">
                        <option value="all" selected>My languages</option>
                        <option value="C">C</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="JS">JS</option>
                    </select>


                   

                    <label for="countries" class="block mb-1 text-base font-medium text-gray-200 dark:text-white">Tags</label>
                    <select 
                    
                    name='tags'
                    id='tags'
                    onChange={(e) => {
                      submit(e.currentTarget.form)
                    }}
                    
                    class="bg-[#43434a] mb-2  text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="all" selected>Select tag</option>
                        <option value="Algorythms">Algorythms</option>
                        <option value="DataScience">Data Science</option>
                        <option value="Statistics">Statistics</option>
                        <option value="Fundamentals">Fundamentals</option>
                        <option value="Arrays">Arrays</option>
                    </select>

                    <label for="countries" class="block mb-2 text-base font-medium text-gray-200 dark:text-white">Difficulty</label>
                    <select 
                    
                    name='difficulty'
                    id='difficulty'
                    onChange={(e) => {
                      submit(e.currentTarget.form)
                    }}
                    
                    class="bg-[#43434a] mb-2 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="all" selected>Select difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                    </select>

              

            

                    </Form>
               </div>
  </div>

  <div className='grid col-span-7'>

  

  <div class="  flex flex-wrap  flex-col">

          {tests.map((test) => {
                  return (

                    
                  
                  
                    <div class=" ml-0 md:mr-10 mb-5 h-30">
                    <div class="relative h-full p-2 bg-[#34343B]  rounded-lg">
                        <div class="grid grid-cols-12">
                         
                             <div className='grid col-span-11 items-center mx-3'>
                             
                             <Link to={`../test/${test._id}`} className='pt-1 flex flex-nowrap my-2  text-base	  text-gray-200'>   {test.name} <div className='ml-5 p-1 bg-white text-gray-700 rounded-md uppercase font-medium text-sm'>{test.language}</div></Link>
                             
                             </div>
                             
                         </div>
     
                         <div class="flex flex-nowrap m-1">

                             <div className={`p-2 bg-stone-800 rounded-md mr-1 text-gray-100 m-1 text-sm  
                              ${test.difficulty === 'easy' ? 'bg-green-900' : ''}
                              ${test.difficulty === 'normal' ? 'bg-yellow-900' : ''}
                              ${test.difficulty === 'hard' ? 'bg-red-900' : ''}
                              w-16 flex justify-center`}>{test.difficulty}</div>
                             <div className='p-2 bg-[#43434a] rounded-md mr-1 text-gray-100 m-1 text-sm		'>{test.tags}</div>
                         </div>  
                     </div>
                 </div>
                  
                  
                  
                  
                  );
                })}



            

           
            

       
         

            
           
            
       
         
     

        

   

</div>

    
  </div>
</div>
    {/* //<TestsContainer/> */}
    

        </div>

        </AllTestsContext.Provider>


  )
}

export const useAllTestsContext = () => useContext(AllTestsContext);

export default AllTests