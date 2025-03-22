import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"
import { DragHandleDots2Icon } from "@radix-ui/react-icons"
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
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import React from "react"


interface QuestionCardProps {
	question: {
		question: string
		options: string[]
		correctOption: number
	}
	questionIndex: number
	onQuestionUpdate: (index: number, field: 'question' | 'correctOption', value: any) => void
	onOptionUpdate: (questionIndex: number, optionIndex: number, value: string) => void
}

interface SortableOptionItemProps {
	id: number
	value: string
	onChange: (value: string) => void
	onRemove: () => void
	isCorrect: boolean
}

function SortableOptionItem({ id, value, onChange, onRemove, isCorrect }: SortableOptionItemProps) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		zIndex: isDragging ? 1 : 0,
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			className={`flex items-center gap-2 p-2 bg-background rounded-lg border ${isDragging ? 'opacity-50' : ''} ${isCorrect ? 'border-green-500' : ''}`}
		>
			<button
				type="button"
				className="cursor-move touch-none p-1 hover:bg-accent rounded"
				{...attributes}
				{...listeners}
			>
				<DragHandleDots2Icon className="h-5 w-5" />
			</button>
			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Enter option text"
				required
				className="flex-1"
			/>
			<Button
				type="button"
				variant="ghost"
				size="sm"
				onClick={onRemove}
				className="text-destructive hover:text-destructive"
			>
				×
			</Button>
		</div>
	)
}

export function NewQuizQuestionCard({
	question,
	questionIndex,
	onQuestionUpdate,
	onOptionUpdate
}: QuestionCardProps) {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	const [isCollapsed, setIsCollapsed] = React.useState(false)

	const handleDragEnd = (event: any) => {
		const { active, over } = event

		if (active.id !== over.id) {
			const oldIndex = active.id
			const newIndex = over.id
			const newOptions = arrayMove(question.options, oldIndex, newIndex)

			// Update all options at once
			newOptions.forEach((option, index) => {
				onOptionUpdate(questionIndex, index, option)
			})

			// Update correct option index if needed
			if (question.correctOption === oldIndex) {
				onQuestionUpdate(questionIndex, 'correctOption', newIndex)
			} else if (question.correctOption === newIndex) {
				onQuestionUpdate(questionIndex, 'correctOption', oldIndex)
			}
		}
	}

	const addOption = () => {
		if (question.options.length < 10) {
			const newOptions = [...question.options, ""]
			newOptions.forEach((option, index) => {
				onOptionUpdate(questionIndex, index, option)
			})
		}
	}

	const removeOption = (indexToRemove: number) => {
		if (question.options.length > 2) {
			const newOptions = question.options.filter((_, index) => index !== indexToRemove)
			newOptions.forEach((option, index) => {
				onOptionUpdate(questionIndex, index, option)
			})

			// Adjust correct option index if needed
			if (question.correctOption === indexToRemove) {
				onQuestionUpdate(questionIndex, 'correctOption', 0)
			} else if (question.correctOption > indexToRemove) {
				onQuestionUpdate(questionIndex, 'correctOption', question.correctOption - 1)
			}
		}
	}

	return (
		<Card className="p-4 space-y-4">
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
						value={question.correctOption.toString()}
						onValueChange={(value) => onQuestionUpdate(questionIndex, 'correctOption', parseInt(value))}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Correct Answer" />
						</SelectTrigger>
						<SelectContent>
							{question.options.map((_, index) => (
								<SelectItem key={index} value={index.toString()}>
									Option {index + 1}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				)}
			</div>

			{!isCollapsed && (
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

					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<Label>Options</Label>
							{question.options.length < 10 && (
								<Button
									type="button"
									variant="outline"
									size="sm"
									onClick={addOption}
								>
									Add Option
								</Button>
							)}
						</div>

						<DndContext
							sensors={sensors}
							collisionDetection={closestCenter}
							onDragEnd={handleDragEnd}
						>
							<SortableContext
								items={question.options.map((_, index) => index)}
								strategy={verticalListSortingStrategy}
							>
								<div className="space-y-2">
									{question.options.map((option, index) => (
										<SortableOptionItem
											key={index}
											id={index}
											value={option}
											onChange={(value) => onOptionUpdate(questionIndex, index, value)}
											onRemove={() => removeOption(index)}
											isCorrect={index === question.correctOption}
										/>
									))}
								</div>
							</SortableContext>
						</DndContext>
					</div>
				</>
			)}
		</Card>
	)
}
