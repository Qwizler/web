import { UpdateQuiz } from "@/api/client";
import type { Quiz, UpdateQuizData } from "@/types";
import { useMutation } from "@tanstack/react-query";

const useUpdateQuiz = (data: UpdateQuizData) => {
	const m = useMutation({
		mutationKey: ["quizzes", "update"],
		mutationFn: async (data: UpdateQuizData) => {
			const response = await UpdateQuiz(data)
			const q: Quiz | undefined = response.getQuiz()?.toObject()
			return q
		},
	})
	return m
}
export default useUpdateQuiz
