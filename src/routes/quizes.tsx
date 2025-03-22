import { AppSidebar } from '@/components/AppSidebar'
import { SiteHeader } from '@/components/SiteHeader'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Layout from '@/pages/Layout'
import QuizesPage from '@/pages/QuizesPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quizes')({
	component: RouteComponent,
})

function RouteComponent() {
	return <>
		<Layout name="Quizzes">
			<QuizesPage />
		</Layout>

	</>
}
