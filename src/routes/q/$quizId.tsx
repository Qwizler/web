import Layout from '@/pages/Layout'
import QuizPage from '@/pages/QuizPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/q/$quizId')({
	component: RouteComponent,
})

function RouteComponent() {
	const { quizId } = Route.useParams()
	return (
		<Layout name="Quiz">
			<QuizPage quizId={quizId} />
		</Layout>
	)
}
