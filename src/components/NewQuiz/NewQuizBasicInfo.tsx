import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"

interface QuizBasicInfoProps {
	title: string
	description: string
	timeLimit: string
	onTitleChange: (value: string) => void
	onDescriptionChange: (value: string) => void
	onTimeLimitChange: (value: string) => void
}

export function QuizBasicInfo({
	title,
	description,
	timeLimit,
	onTitleChange,
	onDescriptionChange,
	onTimeLimitChange
}: QuizBasicInfoProps) {
	return (
		<Card className="p-4 space-y-4">
			<div className="space-y-2">
				<Label>Quiz Title</Label>
				<Input
					id="title"
					placeholder="Enter quiz title"
					value={title}
					onChange={(e) => onTitleChange(e.target.value)}
					required
				/>
			</div>

			<div className="space-y-2">
				<Label >Description</Label>
				<Textarea
					id="description"
					placeholder="Enter quiz description"
					value={description}
					onChange={(e) => onDescriptionChange(e.target.value)}
					className="h-20"
				/>
			</div>

			<div className="flex gap-4">
				<div className="w-full space-y-2">
					<Label >Time Limit</Label>
					<Select value={timeLimit} onValueChange={onTimeLimitChange}>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="15">15 minutes</SelectItem>
							<SelectItem value="30">30 minutes</SelectItem>
							<SelectItem value="45">45 minutes</SelectItem>
							<SelectItem value="60">60 minutes</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</Card>
	)
}

