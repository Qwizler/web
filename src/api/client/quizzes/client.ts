import {
	CreateQuiz,
	DeleteQuiz,
	GetQuiz,
	ListQuizzes,
	UpdateQuiz,
} from "./queries";
export function NewQuizzesRestClient() {
	const endpoint = import.meta.env.VITE_QUIZZES_HTTP;
	if (!endpoint) {
		throw new Error("VITE_QUIZZES_HTTP is not set");
	}
	return {
		CreateQuiz: CreateQuiz(endpoint),
		DeleteQuiz: DeleteQuiz(endpoint),
		GetQuiz: GetQuiz(endpoint),
		ListQuizzes: ListQuizzes(endpoint),
		UpdateQuiz: UpdateQuiz(endpoint),
	};
}

export default NewQuizzesRestClient;
