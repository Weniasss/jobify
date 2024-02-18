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
import { Card, Typography } from "@material-tailwind/react";
import { Button } from '@material-tailwind/react'

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/result/`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/');
  }
};

const Leaderboard = () => {

const [openProfile, setOpenProfile] = useState(false);
 const TABLE_HEAD = ["Position", "User", "Score"];
 
const TABLE_ROWS = [
  {
    name: "1",
    job: "Weniasss",
    date: "789",
  },
  {
    name: "2",
    job: "Hell",
    date: "321",
  },
  {
    name: "3",
    job: "Qwerty",
    date: "231",
  },
];

const { user } = useOutletContext();

const data = useLoaderData();
const {results} = data;

console.log(data);

  return (
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



  <div className='grid col-span-3'></div>

<div  className='grid col-span-6   rounded-lg bg-[#34343B] p-4'>
  <Link to="./1" className='text-lg	font-bold'>Liderboard</Link>
  <div className='flex flex-nowrap m-1'>

  </div>
  <br className='bg-black'></br>


  <Card className="h-84 w-full shadow-none">
      <table className="w-full min-w-max table-auto text-left shadow-none">
        <thead className='bg-[#34343B] '>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="  p-4 ">
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
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="bg-[#34343B] border-b border-[#43434a]">
              <td className="px-4">
                <Typography variant="small" color="blue-gray" className="font-bold text-white w-24">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-bold text-white">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-bold text-white">
                  {date}
                </Typography>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

</div>

<div className='grid col-span-3'></div>


<div className='grid col-span-3'></div>


</div>



</div>
  )
}

export default Leaderboard