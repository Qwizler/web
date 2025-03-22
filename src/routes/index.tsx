import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { Button } from '@/components/ui/button'
import DashboardPage from '@/pages/DashboardPage'

export const Route = createFileRoute('/')({
	component: App,
})

function App() {
	return (
		<DashboardPage />
	)
}
