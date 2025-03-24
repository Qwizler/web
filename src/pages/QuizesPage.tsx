import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { useListQuizzes } from "@/hooks/queries/useQuizQuery";
import { useNavigate } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useCallback } from "react";

export default function QuizesPage() {
	const navigate = useNavigate();
	const { data, isLoading, isError, error } = useListQuizzes(1, 10);

	if (isError) console.error(error);

	// Memoize the onClick handler
	const handleCreateQuiz = useCallback(
		() => navigate({ to: "/q/create" }),
		[navigate],
	);

	return (
		<div className="flex h-full w-full flex-col items-center  gap-4 px-4 py-16 sm:px-6 lg:px-8">
			<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
				<div className="flex items-center justify-between px-4 lg:px-6">
					<div>
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
							Quizes
						</h1>
						<p className="text-lg font-medium text-gray-600 dark:text-gray-400">
							Welcome to your quizes.
						</p>
					</div>
					<Button variant="default" onClick={handleCreateQuiz}>
						<Plus className="w-4 h-4" />
						Create Quiz
					</Button>
				</div>
				<div className="flex flex-row gap-4 flex-wrap">
					{data?.map((quiz) => (
						<QuizCard
							isLoading={isLoading}
							id={quiz.id}
							key={quiz.id}
							title={quiz.title}
							description={quiz.description}
							duration={quiz.duration}
							difficulty={quiz.difficulty}
							userId={quiz.userId}
							audit={quiz.audit}
							thumbnail={quiz.thumbnail}
							cover={quiz.cover}
							category={quiz.category}
							tags={quiz.tags}
							metadata={quiz.metadata}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
