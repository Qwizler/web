
export type Quiz = {
	id: string
	title: string
	description: string
	questions: number
	durationSeconds?: number
	difficulty?: QuizDifficulty
	startQuiz: string
	tags?: string[]
}

export type QuizDifficulty = "Easy" | "Medium" | "Hard" | "Expert"

export type QuizQestion = {
	id: string
	question: string
	choices: string[]
	difficulty: QuizDifficulty
}
