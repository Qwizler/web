import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface QuestionHeaderProps {
	isCollapsed: boolean
	setIsCollapsed: (value: boolean) => void
	questionIndex: number
	question: {
		choices: string[]
		correctChoice: number
	}
	onQuestionUpdate: (index: number, field: 'question' | 'correctChoice', value: any) => void
}

export default function QuestionHeader({ isCollapsed, setIsCollapsed, questionIndex, question, onQuestionUpdate }: QuestionHeaderProps) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<Button
					variant="ghost"
					size="sm"
					onClick={() => setIsCollapsed(!isCollapsed)}
					className="h-6 w-6 p-0"
				>
					{isCollapsed ? '+' : '−'}
				</Button>
				<h3 className="font-medium">Question {questionIndex + 1}</h3>
			</div>
			{!isCollapsed && (
				<Select
					value={question.correctChoice.toString()}
					onValueChange={(value) => onQuestionUpdate(questionIndex, 'correctChoice', parseInt(value))}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Correct Answer" />
					</SelectTrigger>
					<SelectContent>
						{question.choices.map((_, index) => (
							<SelectItem key={index} value={index.toString()}>
								Choice {index + 1}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			)}
		</div>
	)
}
