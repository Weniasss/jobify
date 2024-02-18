import React, { useContext, useState } from 'react'
import customFetch from '../utils/customFetch'
import { useLoaderData, useNavigation, useOutletContext } from 'react-router-dom'
import { createContext } from 'react'
import TestsContainer from './TestsContainer'
import { Navbar } from '../components'
import { AiOutlineTag } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { IoLogoAppleAr } from "react-icons/io5";
import { Form, useSubmit, Link, redirect } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

  
    await customFetch.post(`/discuss`, data);
    toast.success('Topic added successfully');
    return redirect('/dashboard/discuss');
  };

const AddDiscuss = () => {
    const { user } = useOutletContext();

    const [openProfile, setOpenProfile] = useState(false);

    return (

        <div className='bg-[#201c1c] h-screen pb-10 '>

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
      <Link to='../profile' class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log out</Link>
    </li>
  </ul>
</div>
}
</div>    </div>
  </div>
</nav>

<div class="grid grid-cols-12 gap-4">

    
<div className='grid col-span-4'></div>

<div className='grid col-span-4 justify-center items-center my-10'><p className='text-3xl font-bold'>Add Topic</p></div>
<div className='grid col-span-4'></div>

<div className='grid col-span-4'></div>


<Form method='post'  className='grid col-span-4 justify-center items-center  rounded-lg bg-[#34343B] p-4 '>
<label for="name" class="block mb-1 text-base font-medium text-gray-200 dark:text-white">Title</label>
<input 
    id="name" name="name"  
    className='bg-[#43434a] mb-2   text-sm rounded   p-2 mt-2 bg-stone-800 '>
</input>

<label for="countries" class="block mb-1 text-base font-medium text-gray-200 dark:text-white">Tag</label>
<input 
    id="tags" name="tags"  
    className='bg-[#43434a] mb-2   text-sm rounded   p-2 mt-2 bg-stone-800 '>
</input>

<label for="text" class="block mb-1 text-base font-medium text-gray-200 dark:text-white">Text</label>
<textarea 
    id="text" name="text"
    placeholder="Type comment here... " className='bg-[#43434a] mb-2  text-gray-300 text-sm rounded  block  p-2 mt-2 ' rows = "3" cols = "120">
</textarea>

         
  <div className='flex flex-nowrap m-1'>
  <button type='submit' className='p-2 bg-[#2cb1bc] rounded-md mr-1 text-gray-100 font-bold text-sm w-auto tracking-widest'>Submit</button>

  </div>
</Form>

<div className='grid col-span-4'></div>



</div>

</div>
    )
}

export default AddDiscuss