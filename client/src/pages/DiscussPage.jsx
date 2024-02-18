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



export const loader = async ({ params }) => {
  try {

   
    const { data } = await customFetch.get(`/discuss/${params.id}`);
 

    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);


  try {
    await customFetch.patch(`/discuss/${params.id}`, data);
    return  toast.success('Comment added successfully');

  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};


const DiscussPage = () => {

  const navigation = useNavigation();

  const { user } = useOutletContext();

  const {discuss} = useLoaderData();

  const {tags} = discuss
  const {commnents} = discuss

  console.log(commnents)

  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className='bg-[#201c1c] h-full pb-10 '>

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

<div  className='grid col-span-6 justify-start  rounded-lg bg-[#34343B] p-4'>
  <Link to="./1" className='text-lg	'>{discuss.text}</Link>
  <div className='flex flex-nowrap m-1'>
    {
      tags.map((tag) => {
        return (
          <div className='p-2 bg-[#43434a] rounded-md mr-1 text-gray-100 m-1 text-sm w-auto'>{tag}</div>
        )
      })
    }
 
  </div>
  <br className='bg-black'></br>


  <p className='px-4 tracking-wide leading-relaxed'>{discuss.text}</p>

</div>

<div className='grid col-span-3'></div>


<div className='grid col-span-3'></div>



<Form method='post'  className='grid col-span-6 justify-start  rounded-lg bg-[#34343B] p-4'>
    <textarea 
    id="commnents" name="commnents"
    placeholder="Type comment here... " className='bg-stone-900 mb-2 border border-gray-700 text-gray-600 text-sm rounded  block  p-2 mt-2 ' rows = "3" cols = "120">
            
         </textarea>
  <div className='flex flex-nowrap m-1'>
  <button type='submit' className='p-2 bg-[#2cb1bc] rounded-md mr-1 text-gray-100 font-bold text-sm w-auto tracking-widest'>Post</button>

  </div>
</Form>

<div className='grid col-span-3'></div>

<div className='grid col-span-3'></div>

<div  className='grid col-span-6 justify-start  rounded-lg  '>
    <h1 className='text-base font-bold'>Comments : {commnents.length}</h1>
</div>

<div className='grid col-span-3'></div>

{
  commnents.map((comment) => {


    return (
      <>


      <div className='grid col-span-3'></div>

      <div  className='grid col-span-6 justify-start  rounded-lg bg-[#34343B] p-4'>

          <div className='flex flex-nowrap'><FaUserCircle size={20} className='mr-2'/>
              <p className='text-sm'>
                  Example user  
                  <span className='pl-6 text-xs'>October 6, 2024 10:25 AM</span>
              </p>
          </div>

          <p className='mt-3'>{comment}</p>

      </div>

      <div className='grid col-span-3'></div>
</>
    )

  })
}

</div>


</div>
  )
}

export default DiscussPage