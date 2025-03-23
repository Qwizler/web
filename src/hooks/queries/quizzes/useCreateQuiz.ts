
import { CreateQuiz } from "@/api/client"
import { CreateQuizRequest } from "@/api/rpc/quizzes_pb"
import type { CreateQuizData, Quiz } from "@/types"
import { useMutation } from "@tanstack/react-query"

const useGetQuiz = (id: string) => {
	CreateQuizRequest
	const m = useMutation({
		mutationKey: ["quizzes", "create"],
		mutationFn: async (data: CreateQuizData) => {
			const response = await CreateQuiz(data)
			const q: Quiz | undefined = response.getQuiz()?.toObject()
			return q
		},
	})
	return m
}

export default useGetQuiz
