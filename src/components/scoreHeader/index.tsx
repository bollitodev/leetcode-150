interface ScoreHeaderProps {
    totalQuestions: number;
    solvedQuestions?: number;
}

export default function ScoreHeader({totalQuestions, solvedQuestions}: ScoreHeaderProps) {
    return (
      <div className='w-full'>
        <h2 className="text-5xl font-bold dark:text-white text-center">{solvedQuestions}/{totalQuestions}</h2>
        <h2 className="text-5xl font-bold dark:text-white text-center">Questions</h2>
      </div>
    )
}
