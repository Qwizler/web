import { QuizCard } from "@/components/QuizCard"
import { Button } from "@/components/ui/button"
import useListQuizzes from "@/hooks/queries/quizzes/useListQuizzes"
import type { Quiz } from "@/types"
import { useNavigate } from "@tanstack/react-router"
import { Plus } from "lucide-react"

const Quizes: Quiz[] = [
	{
		id: "26ae8d2f-c9dc-4b66-a738-67a5706e2337",
		title: "Quiz 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		userId: "user-1",
		metadataMap: [],
		tagsList: [],
		duration: 100,
	},
	{
		id: "79eb4dc2-b1c6-4830-823e-ce7ca6becd85",
		title: "Quiz 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		userId: "user-1",
		metadataMap: [],
		tagsList: [],
	},
	{
		id: "02377caa-6629-4344-ae70-12146dc955cd",
		title: "Quiz 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		duration: 600,
		userId: "user-1",
		metadataMap: [],
		tagsList: [],
	},
	{
		id: "31d55a32-f921-4e1b-8753-a6b56a55651a",
		title: "Quiz 4",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		duration: 1800,
		userId: "user-1",
		metadataMap: [],
		tagsList: [],
	}
]

export default function QuizesPage() {
	const navigate = useNavigate()
	const { data, isLoading, isError, error } = useListQuizzes()
	console.log(data)
	return (
		<div className="flex h-full w-full flex-col items-center  gap-4 px-4 py-16 sm:px-6 lg:px-8">
			{/* a quiz card contains title, description, how many questions, and a button to start the quiz, make it minimal, responsive and pretty */}
			<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
				<div className="flex items-center justify-between px-4 lg:px-6">
					<div>
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
							Quizes
						</h1>
						<p className="text-lg font-medium text-gray-600 dark:text-gray-400">
							Welcome to your quizes.
						</p>
					</div>
					<Button variant="default" onClick={async () => navigate({ to: "/q/create" })}>
						<Plus className="w-4 h-4" />
						Create Quiz
					</Button>
				</div>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					{Quizes.map((quiz) => (
						<QuizCard
							id={quiz.id}
							key={quiz.title}
							title={quiz.title}
							description={quiz.description}
							duration={quiz.duration}
							difficulty={quiz.difficulty}
							metadataMap={quiz.metadataMap}
							tagsList={quiz.tagsList}
							userId={quiz.userId}
							audit={quiz.audit}
							thumbnail={quiz.thumbnail}
							cover={quiz.cover}
							category={quiz.category}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

