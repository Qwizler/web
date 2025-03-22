import { cn } from "@/lib/utils"
import type { Quiz, QuizDifficulty } from "@/types"
import { Target, Clock, List } from "lucide-react"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "./ui/button"

function DifficultyColor(difficulty: QuizDifficulty) {
	switch (difficulty) {
		case "Easy":
			return "text-green-500"
		case "Medium":
			return "text-yellow-500"
		case "Hard":
			return "text-red-500"
		case "Expert":
			return "text-purple-500"
	}
}
export function QuizDifficultyBadge({ difficulty }: { difficulty: QuizDifficulty }) {
	const color = DifficultyColor(difficulty)
	return (
		<Badge variant="default" className={cn("flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all bg-transparent", color)}>
			<span className="shrink-0">
				<Target className="size-4 shrink-0" />
			</span>
			<span className={cn(color)}>{difficulty}</span>
		</Badge>
	)
}

export function QuizTimeBadge({ duration }: { duration: number }) {
	const timeColor = duration < 60 ? "text-green-500" : "text-yellow-500"
	const time = duration < 60 ? `${duration}s` : `${Math.floor(duration / 60)}m`
	return (
		<Badge variant="default" className={cn("flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all bg-transparent", timeColor)}>
			<span className="shrink-0">
				<Clock className="size-4 shrink-0" />
			</span>
			<span className={cn(timeColor)}>{time}</span>
		</Badge>
	)
}

export function QuizQuestionsBadge({ questions }: { questions: number }) {
	return (
		<Badge variant="default" className={cn("flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all bg-transparent text-foregorund")}>
			<span className="shrink-0">
				<List className="size-4 shrink-0" />
			</span>
			<span >{questions}</span>
		</Badge>
	)
}

export function QuizCard({ id, title, description, questions, durationSeconds, difficulty, startQuiz }: Quiz) {
	const navigate = useNavigate()
	return (
		<Card className="flex flex-col gap-4">
			<CardHeader className="">
				<CardTitle>
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
					{description.length > 250 ? `${description.slice(0, 250)}...` : description}
				</p>
				<div className="flex flex-row items-center justify-start flex-wrap">
					<QuizQuestionsBadge questions={questions} />
					{durationSeconds && (<QuizTimeBadge duration={durationSeconds} />)}
					{difficulty && (<QuizDifficultyBadge difficulty={difficulty} />)} </div>
				{/* add a button to start the quiz */}
			</CardContent>
			<CardFooter>
				<Button className="" onClick={() => navigate({ to: `/q/${id}` })}>
					{startQuiz}
				</Button>
			</CardFooter>
		</Card>
	)
}
