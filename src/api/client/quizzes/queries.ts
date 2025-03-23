import type {
	ListQuizResponse,
	CreateQuizRequest,
	CreateQuizResponse,
	GetQuizResponse,
	UpdateQuizRequest,
	UpdateQuizResponse,
	DeleteQuizResponse,
} from "@/types";

export const ListQuizzes =
	(url: string) =>
	async ({
		page = 1,
		pageSize = 10,
	}: { page?: number; pageSize?: number }): Promise<ListQuizResponse> => {
		const response = await fetch(
			`${url}/quizzes?pagination.page=${page - 1}&pagination.pageSize=${pageSize}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		return response.json();
	};

export const CreateQuiz =
	(url: string) =>
	async (request: CreateQuizRequest): Promise<CreateQuizResponse> => {
		const response = await fetch(`${url}/quizzes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		});
		return response.json();
	};

export const GetQuiz =
	(url: string) =>
	async (id: string): Promise<GetQuizResponse> => {
		const response = await fetch(`${url}/quizzes/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.json();
	};

export const UpdateQuiz =
	(url: string) =>
	async (
		id: string,
		request: UpdateQuizRequest,
	): Promise<UpdateQuizResponse> => {
		const response = await fetch(`${url}/quizzes/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		});
		return response.json();
	};

export const DeleteQuiz =
	(url: string) =>
	async (id: string): Promise<DeleteQuizResponse> => {
		const response = await fetch(`${url}/quizzes/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.json();
	};
