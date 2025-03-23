import type { components } from "@/api/spec/quizzes";

export type QuizDifficulty = "Easy" | "Medium" | "Hard" | "Expert" | "Unknown";

export type TQuizQuestion = {
	id: string;
	question: string;
	choices: string[];
	difficulty: QuizDifficulty;
};

export type TNewQuizQuestion = Omit<TQuizQuestion, "id"> & {
	correctChoice: number;
};

export type CreateQuizRequest =
	components["schemas"]["quiz.v1.CreateQuizRequest"];
export type CreateQuizResponse =
	components["schemas"]["quiz.v1.CreateQuizResponse"];
export type GetQuizResponse = components["schemas"]["quiz.v1.GetQuizResponse"];
export type ListQuizResponse =
	components["schemas"]["quiz.v1.ListQuizResponse"];
export type UpdateQuizRequest =
	components["schemas"]["quiz.v1.UpdateQuizRequest"];
export type UpdateQuizResponse =
	components["schemas"]["quiz.v1.UpdateQuizResponse"];
export type DeleteQuizResponse =
	components["schemas"]["quiz.v1.DeleteQuizResponse"];

export type Quiz = components["schemas"]["quiz.v1.Quiz"];
