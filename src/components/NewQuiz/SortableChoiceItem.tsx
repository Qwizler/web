import { Input } from "@/components/ui/input"
import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
	useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

interface SortableChoiceItemProps {
	id: number
	value: string
	onChange: (value: string) => void
	onRemove: () => void
	isCorrect: boolean
}

export default function SortableChoiceItem({ id, value, onChange, onRemove, isCorrect }: SortableChoiceItemProps) {
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
				placeholder="Enter choice text"
				required
				className="flex-1"
			/>

			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button
						type="button"
						variant="ghost"
						size="sm"
					>
						<MoreHorizontal className="h-5 w-5" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Set Correct</DropdownMenuItem>
					<DropdownMenuItem variant="destructive" onClick={onRemove} >
						Remove
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
