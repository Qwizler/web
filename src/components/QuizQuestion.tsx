import type { TQuizQuestion } from "@/types"
import { useState } from "react"
import { QuizDifficultyBadge } from "./QuizCard"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"

export function QuizQuestion({ id, question, choices, difficulty, currentQuestion }: TQuizQuestion & { currentQuestion: number }) {
	const [answer, setAnswer] = useState<number | null>(null)
	const [isGivingUp, setIsGivingUp] = useState(false)

	const handleAnswer = (index: number) => {
		setAnswer(index)
	}

	const handleGiveUp = () => {
		setIsGivingUp(true)
	}

	return (
		<Card className="w-full">
			<CardHeader>
				<div className="flex items-center justify-between">
					<QuizDifficultyBadge difficulty={difficulty} />
					<span className="text-sm text-gray-500">{currentQuestion}/{10}</span>

				</div>
				<CardTitle className="mt-4 text-xl font-bold leading-tight text-gray-900 dark:text-white sm:text-2xl">
					{question}
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-4">
				<div className="grid gap-3">
					{choices.map((choice, index) => (
						<Button
							key={index}
							variant={answer === index ? "default" : "outline"}
							className={`w-full border-2 justify-start px-4 py-6 text-left text-lg transition-all ${answer === index
								? "border-indigo-500 bg-indigo-500/50 dark:bg-indigo-800/50 dark:border-indigo-500 dark:text-indigo-300 "
								: "hover:bg-indigo-100/25 hover:border-indigo-500 dark:hover:bg-indigo-800/25 dark:hover:border-indigo-500"
								}`}
							onClick={() => handleAnswer(index)}
						>
							<span className="mr-4 font-semibold">{String.fromCharCode(65 + index)}.</span>
							{choice}
						</Button>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex justify-end">
				<div className={`transform transition-all duration-200 ${answer === null ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
					<Button
						disabled={answer === null}
						size="lg"
						onClick={() => {
							if (answer !== null) {
								// TODO: Handle submission
								console.log(`Submitted answer: ${answer}`);
							}
						}}
					>
						Submit Answer
					</Button>
				</div>
			</CardFooter>
		</Card>
	)
}
