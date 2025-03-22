import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core"
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import SortableChoiceItem from "./SortableChoiceItem"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import type { TNewQuizQuestion } from "@/types"

interface QuestionContentProps {
	question: TNewQuizQuestion
	questionIndex: number
	onQuestionUpdate: (index: number, field: 'question' | 'correctChoice' | 'difficulty', value: any) => void
	onChoiceUpdate: (questionIndex: number, choiceIndex: number, value: string) => void
}

export default function QuestionContent({ question, questionIndex, onQuestionUpdate, onChoiceUpdate }: QuestionContentProps) {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	const handleDragEnd = (event: any) => {
		const { active, over } = event

		if (active.id !== over.id) {
			const oldIndex = active.id
			const newIndex = over.id
			const newChoices = arrayMove(question.choices, oldIndex, newIndex)

			newChoices.forEach((choice, index) => {
				onChoiceUpdate(questionIndex, index, choice)
			})

			if (question.correctChoice === oldIndex) {
				onQuestionUpdate(questionIndex, 'correctChoice', newIndex)
			} else if (question.correctChoice === newIndex) {
				onQuestionUpdate(questionIndex, 'correctChoice', oldIndex)
			}
		}
	}

	const addChoice = () => {
		if (question.choices.length < 10) {
			const newChoices = [...question.choices, ""]
			newChoices.forEach((choice, index) => {
				onChoiceUpdate(questionIndex, index, choice)
			})
		}
	}

	const removeChoice = (indexToRemove: number) => {
		if (question.choices.length > 2) {
			const newChoices = question.choices.filter((_, index) => index !== indexToRemove)
			newChoices.forEach((choice, index) => {
				onChoiceUpdate(questionIndex, index, choice)
			})

			if (question.correctChoice === indexToRemove) {
				onQuestionUpdate(questionIndex, 'correctChoice', 0)
			} else if (question.correctChoice > indexToRemove) {
				onQuestionUpdate(questionIndex, 'correctChoice', question.correctChoice - 1)
			}
		}
	}

	return (
		<>
			<div className="space-y-2">
				<Label>Question Text</Label>
				<Textarea
					value={question.question}
					onChange={(e) => onQuestionUpdate(questionIndex, 'question', e.target.value)}
					placeholder="Enter your question"
					required
				/>
			</div>

			<div className="flex items-center gap-2">
				<span className="text-sm font-medium">Difficulty</span>
				<Select
					value={question.difficulty || "medium"}
					onValueChange={(value) => onQuestionUpdate(questionIndex, 'difficulty', value)}
				>
					<SelectTrigger className="w-[120px] h-8">
						<SelectValue placeholder="Select" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="easy" className="text-green-500 dark:text-green-400">Easy</SelectItem>
						<SelectItem value="medium" className="text-blue-500 dark:text-blue-400">Medium</SelectItem>
						<SelectItem value="hard" className="text-orange-500 dark:text-orange-400">Hard</SelectItem>
						<SelectItem value="expert" className="text-red-500 dark:text-red-400">Expert</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<Label>Choices</Label>
					{question.choices.length < 10 && (
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={addChoice}
						>
							Add Choice
						</Button>
					)}
				</div>


				<DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}
				>
					<SortableContext
						items={question.choices.map((_, index) => index)}
						strategy={verticalListSortingStrategy}
					>
						<div className="space-y-2">
							{question.choices.map((choice, index) => (
								<SortableChoiceItem
									key={index}
									id={index}
									value={choice}
									onChange={(value) => onChoiceUpdate(questionIndex, index, value)}
									onRemove={() => removeChoice(index)}
									isCorrect={index === question.correctChoice}
								/>
							))}
						</div>
					</SortableContext>
				</DndContext>
			</div>
		</>
	)
}
