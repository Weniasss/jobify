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
import { FaGithub } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { Card, Typography } from "@material-tailwind/react";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/result/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/');
  }
};


const Profile = () => {

  const [openProfile, setOpenProfile] = useState(false);

  const { user } = useOutletContext();
  const data = useLoaderData();

  const {results} = data;

  var totalPoints = 0;

// Using parentheses () instead of curly braces {}
results.map(({ name, language, score }) => (console.log(score) ));

console.log(totalPoints);

  const TABLE_HEAD = ["Test name", "Language", "Score", ""];
 

  return (
    <div className='bg-[#201c1c] h-max pb-10'>

<nav class="flex items-center justify-between flex-wrap  p-3 mb-10 bg-[#34343B]">
  <div class="flex items-center flex-shrink-0 text-white mr-6 ml-16">
      <IoLogoAppleAr  size={32}/>
      
  </div>
  
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-8">
    <div class="text-sm lg:flex-grow">
      <Link to="../tests" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-8 text-lg	tracking-wide	">
        Tests
      </Link>
      <Link to="../discuss" class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white text-lg mr-8	tracking-normal	">
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
    <Link to='' class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
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

  <div className='grid col-span-2'></div>
           
  <div  className='grid col-span-8 '>     
    <div class="   h-80   rounded-lg bg-[#34343B] ">
      <div className='flex justify-between no-wrap m-5'>
        <div class="grid items-center justify-center w-16 h-16 bg-gray-100 rounded-lg ">
          <p class="font-medium text-gray-600 text-2xl">U</p>
        </div>
        <MdSettings size={32}/>
      </div>
      <div className='grid grid-cols-3'>
        <div className='flex justify-center flex-col'>
          <div className='m-5'><span className='font-bold mr-1'>Name:</span> {user.name}</div>
          <div className='m-5'><span className='font-bold mr-1'>Email:</span> {user.email}</div>
          <div className='m-5'><span className='font-bold mr-1'>Member Since:</span> Jul 2023</div>
        </div>
        <div className='flex flex-col'>
          <div className='m-5'><span className='font-bold mr-1'>Profiles:</span> <span></span></div>
          <div className='m-5'><span className='font-bold mr-1'>Finished quizes:</span> {results.length}</div>
          <div className='m-5'><span className='font-bold mr-1'>Avg result:</span> 35.8</div>
        </div>
        <div className='flex flex-col'>
          <div className='m-5'><span className='font-bold mr-1'>Favorit tags:</span> Mathematic, Array</div>
          <div className='m-5'><span className='font-bold mr-1'>Favorite language:</span> Java, PHP</div>
          <div className='m-5'><span className='font-bold mr-1'>Favorite difficulty:</span> Hard</div>
        </div>
      </div>
    </div>
  </div>

  <div className='grid col-span-2'></div>

  <div className='grid col-span-2'></div>

  <div className='grid col-span-2'>
    <div className='flex no-wrap my-2'>
    
    <p className='font-bold'>History results :</p>

    


                    </div>
                    
                    
                    </div>
</div>

<div class="grid grid-cols-12 gap-4">

<div className='grid col-span-2'></div>

<div  className='grid col-span-8 mt-2'>     

<Card className="h-84 w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead className='bg-[#34343B]'>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-gray-500  p-4">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none  font-bold "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map(({ name, language, score }) => (
            <tr key={name} className="even:bg-[#34343B]/80 odd:bg-[#34343B]/90 ">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-bold text-white">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-bold text-white">
                  {language}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-bold text-white">
                  {score}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="../tests" variant="small" color="blue-gray" className="font-bold text-white">
                  Try again
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>



</div>

</div>


</div>
  )
}

export default Profile