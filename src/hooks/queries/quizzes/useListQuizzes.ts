import { ListQuizzes } from "@/api/client"
import { useQuery } from "@tanstack/react-query"

const useListQuizzes = (page = 1, pageSize = 10) => {
	const q = useQuery({
		queryKey: ["quizzes", "list", `page-${page}`, `pageSize-${pageSize}`],
		queryFn: async () => {
			const response = await ListQuizzes({ page: page - 1, pageSize: pageSize })
			return response.toObject()
		},
	})
	return q
}

export default useListQuizzes


