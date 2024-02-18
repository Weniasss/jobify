import { useEffect, useState } from 'react'
import { resultInitalState } from './constants';

import React, { PureComponent } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { Progress } from "@material-tailwind/react";
import { Form, useOutletContext } from 'react-router-dom';

import { Link, useLoaderData , redirect } from 'react-router-dom';

import { IoLogoAppleAr } from "react-icons/io5";
import { toast } from 'react-toastify';

import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await customFetch.post('/result', data);
  toast.success('the test result is correctly recorded');
  return redirect('/dashboard/tests');
};

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/tests/${params.id}`);

    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};



const Test = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitalState);
    const [showResult, setShowResult] = useState(false);

    const { user } = useOutletContext();



    const {test} = useLoaderData();

    

    const {questionsTest} = test;
 

 
     const {question, choices, correctAnswer} = questionsTest[currentQuestion];
 
    
    

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if(answer === correctAnswer){
            setAnswer(true)
        } else {
            setAnswer(false)
        }
    }

    useEffect(() => {
        result.correctAnswers = 0
        result.wrongAnswers = 0
        result.score = 0
    }, [])

    const [count, setCount] = useState(0);

    const click = () => {
        setAnswerIdx(null)
        if(answer){
            result.score += 5;
            result.correctAnswers += 1;
        } else {
            result.wrongAnswers += 1;
        }

    

        if(currentQuestion !== questions.length - 1){
            setCurrentQuestion((prev) => prev + 1)
        } else {
            setCurrentQuestion(0)
            setShowResult(true)
        }   
    }
    const [openProfile, setOpenProfile] = useState(false);



    
  return (
    

<div className="questions bg-[#201c1c] ">


{!showResult ? (<><div class="grid grid-cols-12 gap-4 h-screen">

    <div className='grid col-span-1'></div>
        <div className="grid col-span-6 items-center content-center  bg-[#201c1c]">
        <div className="grid grid-cols-2 content-center">
        
        <div className="flex justify-center">
          <button
            className={` btn prev  w-24 btn next text-xl  font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-300 rounded m-5`}
        
          >
            Prev
          </button>
        </div>

      <div className="flex justify-center">
        <button
          className=" w-24 btn next text-xl bg-gray-200 font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-300 rounded m-5"
          onClick={click}
        >
          Next
        </button>
      </div>
    </div>

          <div className="text-white text-xl m-5">
            <div className="flex justify-center  bg-[#34343B] h-60 p-5 rounded-md text-justify items-center">
            {question}
            </div>
          </div>

          <div className="text-white text-xl m-5">
            <div className="flex justify-center items-center  bg-[#34343B] h-16 p-2 w-48 rounded-md text-justify">
             Question {result.correctAnswers + result.wrongAnswers + 1 === 6 ? 1 : result.correctAnswers + result.wrongAnswers + 1} / 5
            </div>
          </div>
        </div>

        <div className="grid  place-items-center col-span-4 bg-[#201c1c]">
        <ul className='items-center '>
            {
                choices.map((answer, index) => (
                    <li className={answerIdx === index ? 'flex items-center justify-center text-xl m-8 my-14 font-bold rounded-xl bg-white p-5 items-center text-black w-72': 'flex items-center justify-center text-xl m-8 my-14 font-bold rounded-xl bg-[#34343B] p-5 items-center text-white w-72' }
                        onClick={() => onAnswerClick(answer, index)}
                        key={answer}     
                    >
                        {answer}
                           
                    </li>
                ))
            }
        </ul>


          
        </div>
      </div></>) : ( <div className='h-screen'> 


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


<div class="grid grid-cols-12 gap-10  content-center h-max py-8 ">

    <div className='grid col-span-12 justify-center pb-10'>
        <h1 className='text-4xl font-bold	tracking-wider		'>Your Stats :</h1>
        </div>

    
<div className='grid col-span-2'></div>


<div className="grid col-span-2 bg-[#34343B] justify-center items-center rounded-lg">
<h1 className='text-9xl'>{result.correctAnswers * 20 === 100? 'S' : result.correctAnswers * 20 > 75? 'A' : result.correctAnswers * 20 > 50? 'B' : 'C'}</h1>
</div>


<div className="grid col-span-6 items-center content-center bg-[#34343B] p-5 rounded-lg">



      <div className="mb-2 flex items-center justify-between gap-4 mb-3">
        <Typography color="red-white" variant="h6">
          Score
        </Typography>
        <Typography color="red-white" variant="h6">
        {result.score * 4}%
        </Typography>
      </div>
      <Progress color="indigo" value={result.score * 4} />

      <div className="mb-2 flex items-center justify-between gap-4 my-3">
        <Typography color="blue-white" variant="h6">
          Correct questions
        </Typography>
        <Typography color="blue-white" variant="h6">
        {result.correctAnswers * 20}%
        </Typography>
      </div>
      <Progress color="green" value={result.correctAnswers * 20} />

      <div className="mb-2 flex items-center justify-between gap-4 my-3">
        <Typography color="blue-white" variant="h6">
          Wrong questions
        </Typography>
        <Typography color="blue-white" variant="h6">
        {result.wrongAnswers * 20}%
        </Typography>
      </div>
      <Progress color="red" value={result.wrongAnswers * 20} />

</div>








<div className='grid col-span-2'></div>

<Form method='post' className='grid col-span-12 justify-center pt-10'>

  <input className='hidden'  name="name" id="name" defaultValue={test.name} />
  <input className='hidden'  name="score" id="score" defaultValue={result.score} />
  <input className='hidden'  name="language" id="language" defaultValue={test.language} />
  <input className='hidden'  name="userId" id="userId" defaultValue={user._id} />
  <input className='hidden'  name="userName" id="userName" defaultValue={user.name} />
  <button type='submit' className='text-xl font-bold	tracking-wider bg-[#2cb1bc] p-3 text-gray-200 rounded-lg'>Submit</button>

</Form>


     

</div>


 



</div>)}

      
    </div>
        
   
  )
}

export default Test