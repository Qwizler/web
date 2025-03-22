import type { Quiz } from "@/types";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, Clock, List } from "lucide-react";
import { GradientCard } from "./GradientCard";




export function QuizHeader({ title, description, questions, durationSeconds, currentQuestion }: Quiz & { currentQuestion: number }) {
	return (
		<GradientCard>
			<div className="mb-4 space-y-1">
				<h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
				<Collapsible className="text-sm text-gray-100 dark:text-gray-200">
					<CollapsibleTrigger className="flex items-center gap-1 text-sm font-medium text-violet-200 hover:text-white dark:text-violet-300 dark:hover:text-white transition-colors">
						<span>View Description</span>
						<ChevronDown className="h-3 w-3" />
					</CollapsibleTrigger>
					<CollapsibleContent className="mt-2 text-gray-100 dark:text-gray-200 bg-white/10 backdrop-blur-sm rounded-lg p-3">{description}</CollapsibleContent>
				</Collapsible>
			</div>
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
							<List className="h-3 w-3 text-white" />
						</div>
						<div>
							<p className="text-xs font-medium text-white">Questions</p>
							<p className="text-xs text-gray-200">{questions} total</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
							<Clock className="h-3 w-3 text-white" />
						</div>
						<div>
							<p className="text-xs font-medium text-white">Time Limit</p>
							<p className="text-xs text-gray-200">{durationSeconds && `${Math.floor(durationSeconds / 60)} minutes`}</p>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20 dark:bg-white/10 sm:w-48">
						<div className="h-1.5 rounded-full bg-violet-300" style={{ width: `${(currentQuestion / questions) * 100}%` }}></div>
					</div>
					<span className="text-xs font-medium text-white">{currentQuestion}/{questions}</span>
				</div>
			</div>
		</GradientCard>
	)
}
