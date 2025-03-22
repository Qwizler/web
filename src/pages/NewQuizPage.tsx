import { useState } from "react"
import { Loader2, Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuizBasicInfo } from "@/components/NewQuiz/NewQuizBasicInfo"
import { NewQuizQuestionCard } from "@/components/NewQuiz/NewQuizQuestionCard"
import type { TNewQuizQuestion, TQuizQuestion } from "@/types"



export default function NewQuizPage() {
	const [loading, setLoading] = useState(false)
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [timeLimit, setTimeLimit] = useState("30")
	const [questions, setQuestions] = useState<TNewQuizQuestion[]>([
		{
			question: "",
			choices: ["", "", "", ""],
			correctChoice: 0,
			difficulty: "Medium"
		}
	])

	const addQuestion = () => {
		setQuestions([
			...questions,
			{
				question: "",
				choices: ["", "", "", ""],
				correctChoice: 0,
				difficulty: "Medium"
			}
		])
	}

	const updateQuestion = (index: number, field: keyof TNewQuizQuestion, value: any) => {
		const newQuestions = [...questions]
		newQuestions[index] = { ...newQuestions[index], [field]: value }
		setQuestions(newQuestions)
	}

	const updateChoice = (questionIndex: number, choiceIndex: number, value: string) => {
		const newQuestions = [...questions]
		newQuestions[questionIndex].choices[choiceIndex] = value
		setQuestions(newQuestions)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		// TODO: Implement quiz submission
		setTimeout(() => setLoading(false), 1000)
	}

	return (
		<div className="flex justify-center">
			<div className="container max-w-4xl py-6 flex flex-col gap-6">
				<h1 className="text-2xl font-bold mb-6">Create New Quiz</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					<QuizBasicInfo
						title={title}
						description={description}
						timeLimit={timeLimit}
						onTitleChange={setTitle}
						onDescriptionChange={setDescription}
						onTimeLimitChange={setTimeLimit}
					/>

					<div className="space-y-4">
						{questions.map((question, qIndex) => (
							<NewQuizQuestionCard
								key={qIndex}
								question={question}
								questionIndex={qIndex}
								onQuestionUpdate={updateQuestion}
								onChoiceUpdate={updateChoice}
							/>
						))}

						<Button
							type="button"
							variant="outline"
							className="w-full"
							onClick={addQuestion}
						>
							<Plus className="w-4 h-4 mr-2" />
							Add Question
						</Button>
					</div>

					<div className="flex justify-end gap-4">
						<Button variant="outline">
							<Upload className="w-4 h-4 mr-2" />
							Import Questions
						</Button>
						<Button type="submit" disabled={loading}>
							{loading ? (
								<>
									<Loader2 className="w-4 h-4 mr-2 animate-spin" />
									Creating Quiz...
								</>
							) : (
								'Create Quiz'
							)}
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

