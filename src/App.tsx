import { useQuery } from "@apollo/client";

import './App.css';
import Card from './components/card';
import ScoreHeader from './components/scoreHeader';
import { GET_INTERVIEW_PREP_PROBLEMS } from './queries/studyPlan';

function App() {

  const { loading, error, data } = useQuery(GET_INTERVIEW_PREP_PROBLEMS, {
    variables: { slug: 'top-interview-150' },
  });

  console.log(data);
  console.log(loading);
  console.log(error);

  return (
    <div className='flex justify-center items-center h-screen bg-black flex-wrap'>
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Top Interview</span> 150</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Must-do questions for interview prep from  <a href='https://leetcode.com/studyplan/top-interview-150/' target='_blank'>Leetcode.com</a> </p>
      </div>

      <ScoreHeader totalQuestions={150} answeredQuestions={8} />

      <div className='w-full p-4 flex justify-center items-center'>
        <Card solvedQuestions={10} category='Easy'/>
        <Card solvedQuestions={10} category='Medium'/>
        <Card solvedQuestions={10} category='Hard'/>
      </div>
   
    </div>
  )
}

export default App
