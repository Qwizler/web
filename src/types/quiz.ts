
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

export type TQuizQuestion = {
	id: string
	question: string
	choices: string[]
	difficulty: QuizDifficulty
}

export type TNewQuizQuestion = Omit<TQuizQuestion, "id"> & {
	correctChoice: number
}
