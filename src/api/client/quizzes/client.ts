
import { QuizzesClient } from "../../rpc/QuizzesServiceClientPb"

/**
 * Creates a new QuizzesClient instance with the configured GRPC endpoint
 * @returns {QuizzesClient} A configured GRPC client for the Quizzes service
 * @throws {Error} If VITE_QUIZZES_GRPC environment variable is not set
 */
export default function NewQuizzesClient(): QuizzesClient {
	const endpoint = import.meta.env.VITE_QUIZZES_GRPC
	if (!endpoint) {
		throw new Error("VITE_QUIZZES_GRPC is not set")
	}
	return new QuizzesClient(endpoint)
}
