interface ScoreHeaderProps {
    totalQuestions: number;
    answeredQuestions: number;
}

export default function ScoreHeader({totalQuestions, answeredQuestions}: ScoreHeaderProps) {
    return (
      <div className='w-full'>
        <h2 className="text-5xl font-bold dark:text-white text-center">{answeredQuestions}/{totalQuestions}</h2>
        <h2 className="text-5xl font-bold dark:text-white text-center">Questions</h2>
      </div>
    )
}
