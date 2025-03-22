import { Card } from "@/components/ui/card"
import React from "react"
import type { TNewQuizQuestion } from "@/types"
import QuestionHeader from "./QuestionHeader"
import QuestionContent from "./QuestionContent"


interface QuestionCardProps {
	question: TNewQuizQuestion
	questionIndex: number
	onQuestionUpdate: (index: number, field: 'question' | 'correctChoice' | 'difficulty', value: any) => void
	onChoiceUpdate: (questionIndex: number, choiceIndex: number, value: string) => void
}

export function NewQuizQuestionCard({
	question,
	questionIndex,
	onQuestionUpdate,
	onChoiceUpdate
}: QuestionCardProps) {
	const [isCollapsed, setIsCollapsed] = React.useState(false)

	return (
		<Card className="p-4 space-y-4">
			<div className="flex items-center justify-between">
				<QuestionHeader
					isCollapsed={isCollapsed}
					setIsCollapsed={setIsCollapsed}
					questionIndex={questionIndex}
					question={question}
					onQuestionUpdate={onQuestionUpdate}
				/>
			</div>

			{!isCollapsed && (
				<>
					<QuestionContent
						question={question}
						questionIndex={questionIndex}
						onQuestionUpdate={onQuestionUpdate}
						onChoiceUpdate={onChoiceUpdate}
					/>
				</>
			)}
		</Card>
	)
}
