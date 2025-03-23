import { quiz } from "../rpc/quizzes";

export const BuildPagination = (page: number, pageSize: number) => new quiz.v1.Pagination({
	page: page,
	page_size: pageSize,
})
