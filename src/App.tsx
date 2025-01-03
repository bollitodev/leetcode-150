import './App.css';
import Card from './components/card';
import ScoreHeader from './components/scoreHeader';
import { useQuestionStats } from './hooks/useQuestionStats';

function App() {

  const { solvedQuestions, solvedEasyQuestions, solvedMediumQuestions, solvedHardQuestions, loading, error } = useQuestionStats('top-interview-150');

  return (
    <div className='flex justify-center items-center h-screen bg-black flex-wrap'>
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Top Interview</span> 150</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Must-do questions for interview prep from  <a href='https://leetcode.com/studyplan/top-interview-150/' target='_blank'>Leetcode.com</a> </p>
      </div>

      <ScoreHeader totalQuestions={150} solvedQuestions={solvedQuestions} />

      <div className='w-full p-4 flex justify-center items-center'>
        <Card solvedQuestions={solvedEasyQuestions} category='Easy' />
        <Card solvedQuestions={solvedMediumQuestions} category='Medium' />
        <Card solvedQuestions={solvedHardQuestions} category='Hard' />
      </div>

    </div>
  )
}

export default App
