import { NewQuizzesRestClient } from "@/api";
import type { CreateQuizRequest } from "@/types";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

export const useGetQuiz = (id: string) => {
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

export const useListQuizzes = (page = 1, pageSize = 10) => {
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

export const useCreateQuiz = (data: CreateQuizRequest) => {
	const { CreateQuiz } = NewQuizzesRestClient();
	const client = new QueryClient();
	const q = useMutation({
		mutationKey: ["quizzes", "create"],
		mutationFn: async () => {
			const response = await CreateQuiz(data);
			return response.quiz;
		},
		onMutate: async (data) => {
			client.invalidateQueries({
				queryKey: ["quizzes"],
			});
		},
	});
	return q;
};

export const useUpdateQuiz = (id: string, data: CreateQuizRequest) => {
	const { UpdateQuiz } = NewQuizzesRestClient();
	const client = new QueryClient();
	const q = useMutation({
		mutationKey: ["quizzes", "update"],
		mutationFn: async () => {
			const response = await UpdateQuiz(id, data);
			return response.quiz;
		},
		onMutate: async (id) => {
			client.invalidateQueries({
				queryKey: ["quizzes", id],
			});
		},
	});
	return q;
};

export const useDeleteQuiz = (id: string) => {
	const { DeleteQuiz } = NewQuizzesRestClient();
	const client = new QueryClient();
	const q = useMutation({
		mutationKey: ["quizzes", "delete"],
		mutationFn: async () => {
			const response = await DeleteQuiz(id);
			return response.id;
		},
		onMutate: async () => {
			client.invalidateQueries({
				queryKey: ["quizzes"],
			});
		},
	});
	return q;
};
