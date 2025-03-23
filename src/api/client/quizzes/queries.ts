import NewQuizzesClient from "./client"
import { BuildPagination } from "../lib"

export const ListQuizzes = async ({ page = 1, pageSize = 10 }: { page?: number, pageSize?: number } = {}) => {
	const client = NewQuizzesClient()
	const pagination = BuildPagination(page, pageSize)
	const request = new ListQuizRequest()
	const response = await client.listQuiz(request)
	return response
}

export const GetQuiz = async ({ id }: { id: string }) => {
	const client = NewQuizzesClient()
	const request = new GetQuizRequest().setId(id)
	const response = await client.getQuiz(request)
	return response
}

export const CreateQuiz = async ({ title, description, duration, thumbnail, cover, category, tags }: {
	title: string,
	description: string,
	duration?: number,
	thumbnail?: string,
	cover?: string,
	category?: string,
	tags?: string[],
}) => {
	const client = NewQuizzesClient()
	const request = new CreateQuizRequest()
		.setTitle(title)
		.setDescription(description)
	if (duration !== undefined) request.setDuration(duration)
	if (thumbnail !== undefined) request.setThumbnail(thumbnail)
	if (cover !== undefined) request.setCover(cover)
	if (category !== undefined) request.setCategory(category)
	if (tags !== undefined) request.setTagsList(tags)
	const response = await client.createQuiz(request)
	return response
}

export const UpdateQuiz = async ({ id, title, description, duration, thumbnail, cover, category, tags }: {
	id: string,
	title?: string,
	description?: string,
	duration?: number,
	thumbnail?: string,
	cover?: string,
	category?: string,
	tags?: string[],
}) => {
	const client = NewQuizzesClient()
	const request = new UpdateQuizRequest()
		.setId(id)
	if (title !== undefined) request.setTitle(title)
	if (description !== undefined) request.setDescription(description)
	if (duration !== undefined) request.setDuration(duration)
	if (thumbnail !== undefined) request.setThumbnail(thumbnail)
	if (cover !== undefined) request.setCover(cover)
	if (category !== undefined) request.setCategory(category)
	if (tags !== undefined) request.setTagsList(tags)
	const response = await client.updateQuiz(request)
	return response
}

export const DeleteQuiz = async ({ id }: { id: string }) => {
	const client = NewQuizzesClient()
	const request = new UpdateQuizRequest().setId(id)
	const response = await client.deleteQuiz(request)
	return response
}
