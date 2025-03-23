import { NewQuizzesRestClient } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetQuery = (id: string) => {
	const { GetQuiz } = NewQuizzesRestClient();
	const q = useQuery({
		queryKey: ["quizzes", "get", id],
		queryFn: async () => {
			const response = await GetQuiz(id);
			return response.quiz;
		},
	});
	return q;
};

export const useListQuery = (page = 1, pageSize = 10) => {
	const { ListQuizzes } = NewQuizzesRestClient();
	const q = useQuery({
		queryKey: ["quizzes", "list", `page-${page}`, `pageSize-${pageSize}`],
		queryFn: async () => {
			const response = await ListQuizzes({
				page: page - 1,
				pageSize: pageSize,
			});
			return response.quizzes;
		},
	});
	return q;
};
