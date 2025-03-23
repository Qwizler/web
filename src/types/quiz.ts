import * as pb from "@/api/rpc/quizzes_pb"

// export type Quiz = {
// 	id: string
// 	title: string
// 	description: string
// 	questions: number
// 	durationSeconds?: number
// 	difficulty?: QuizDifficulty
// 	startQuiz: string
// 	tags?: string[]
// }

export type DifficultyEnum = pb.Difficulty
export type QuizDifficulty = "Easy" | "Medium" | "Hard" | "Expert" | "Unknown"

export type TQuizQuestion = {
	id: string
	question: string
	choices: string[]
	difficulty: QuizDifficulty
}

export type TNewQuizQuestion = Omit<TQuizQuestion, "id"> & {
	correctChoice: number
}

export type Quiz = pb.Quiz.AsObject
export type UpdateQuizData = pb.UpdateQuizRequest.AsObject
export type CreateQuizData = pb.CreateQuizRequest.AsObject
export type ListQuiz = pb.ListQuizResponse.AsObject

