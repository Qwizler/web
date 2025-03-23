import { GetQuiz } from "@/api/client"
import type { Quiz } from "@/types"
import { useQuery } from "@tanstack/react-query"

const useGetQuiz = (id: string) => {
	const q = useQuery({
		queryKey: ["quizzes", id],
		queryFn: async () => {
			const response = await GetQuiz({ id: id })
			const q: Quiz | undefined = response.getQuiz()?.toObject()
			return q
		},
	})
	return q
}
export default useGetQuiz
