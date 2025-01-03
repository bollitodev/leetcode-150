interface CardProps {
    solvedQuestions?: number;
    category: string;
}


export default function Card({solvedQuestions, category}:CardProps) {
    return (
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4 min-w-40">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{solvedQuestions}</h5>
          <p className="font-black text-gray-700 dark:text-gray-400 text-center">{category}</p>
        </a>
    )
}