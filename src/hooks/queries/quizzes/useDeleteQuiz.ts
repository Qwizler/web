import { DeleteQuiz } from "@/api/client"
import { useMutation } from "@tanstack/react-query"


const useDeleteQuiz = (id: string) => {
	const m = useMutation({
		mutationKey: ["quizzes", "delete"],
		mutationFn: async (id: string) => {
			const response = await DeleteQuiz({ id: id })
			return response.getId()
		},
	})
	return m
}

export default useDeleteQuiz
