import { Card } from "./ui/card";

export function GradientCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
	return (
		<Card className={`w-full rounded-lg p-4 shadow-md bg-gradient-to-br from-violet-500 via-indigo-600 to-blue-700 dark:from-violet-900 dark:via-indigo-800 dark:to-blue-900 ${className}`}>
			{children}
		</Card>
	)
}
