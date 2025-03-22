import Layout from '@/pages/Layout'
import NewQuizPage from '@/pages/NewQuizPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/q/create')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Layout name="New Quiz">
			<NewQuizPage />
		</Layout>
	)
}
