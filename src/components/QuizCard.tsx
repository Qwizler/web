import { cn } from "@/lib/utils";
import type { Quiz, QuizDifficulty } from "@/types";
import { Target, Clock, List } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { MatchDifficulty } from "@/lib/difficulty";
import { Skeleton } from "./ui/skeleton";

function DifficultyColor(difficulty: QuizDifficulty) {
	switch (difficulty) {
		case "Easy":
			return "text-green-500";
		case "Medium":
			return "text-yellow-500";
		case "Hard":
			return "text-red-500";
		case "Expert":
			return "text-purple-500";
		case "Unknown":
			return "text-gray-500";
	}
}
export function QuizDifficultyBadge({
	difficulty,
}: { difficulty: QuizDifficulty }) {
	const color = DifficultyColor(difficulty);
	return (
		<Badge
			variant="default"
			className={cn(
				"flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all bg-transparent",
				color,
			)}
		>
			<span className="shrink-0">
				<Target className="size-4 shrink-0" />
			</span>
			<span className={cn(color)}>{difficulty}</span>
		</Badge>
	);
}

export function QuizTimeBadge({ duration }: { duration: number }) {
	const timeColor = duration < 60 ? "text-green-500" : "text-yellow-500";
	const time = duration < 60 ? `${duration}s` : `${Math.floor(duration / 60)}m`;
	return (
		<Badge
			variant="default"
			className={cn(
				"flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all bg-transparent",
				timeColor,
			)}
		>
			<span className="shrink-0">
				<Clock className="size-4 shrink-0" />
			</span>
			<span className={cn(timeColor)}>{time}</span>
		</Badge>
	);
}

export function QuizQuestionsBadge({ questions }: { questions: number }) {
	return (
		<Badge
			variant="default"
			className={cn(
				"flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all bg-transparent text-foregorund",
			)}
		>
			<span className="shrink-0">
				<List className="size-4 shrink-0" />
			</span>
			<span>{questions}</span>
		</Badge>
	);
}

export function QuizCard({
	id,
	title,
	description,
	difficulty,
	userId,
	audit,
	thumbnail,
	duration,
	cover,
	category,
	isLoading,
}: Quiz & { isLoading: boolean }) {
	const navigate = useNavigate();
	const durationInt = duration ? Number.parseFloat(duration) : undefined;
	return (
		<>
			{isLoading ? (
				<Card className="flex flex-col gap-4 min-w-80 flex-grow basis-80 max-w-80">
					<CardHeader className="space-y-2">
						<Skeleton className="h-6 w-3/4" />
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-5/6" />
						</div>
						<div className="flex flex-row items-center gap-2 flex-wrap">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-4 w-20" />
						</div>
					</CardContent>
					<CardFooter>
						<Skeleton className="h-10 w-24" />
					</CardFooter>
				</Card>
			) : (
				<Card className="flex flex-col gap-4 min-w-80 flex-grow basis-80">
					<CardHeader className="">
						<CardTitle>{title}</CardTitle>
					</CardHeader>
					<CardContent>
						{description && (
							<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
								{description.length > 250
									? `${description.slice(0, 250)}...`
									: description}
							</p>
						)}
						<div className="flex flex-row items-center justify-start flex-wrap">
							<QuizQuestionsBadge questions={0} />
							{durationInt && <QuizTimeBadge duration={durationInt} />}
							{difficulty && (
								<QuizDifficultyBadge difficulty={MatchDifficulty(difficulty)} />
							)}
						</div>
					</CardContent>
					<CardFooter>
						<Button className="" onClick={() => navigate({ to: `/q/${id}` })}>
							Start Quiz
						</Button>
					</CardFooter>
				</Card>
			)}
		</>
	);
}
