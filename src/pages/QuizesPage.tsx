import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { useListQuery } from "@/hooks/queries/useQuizQuery";
import { useNavigate } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export default function QuizesPage() {
	const navigate = useNavigate();
	const { data, isLoading, isError, error } = useListQuery(1, 10);
	console.log(data);
	if (isError) console.error(error);
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
					<Button
						variant="default"
						onClick={async () => navigate({ to: "/q/create" })}
					>
						<Plus className="w-4 h-4" />
						Create Quiz
					</Button>
				</div>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
					{data
						? data.map((quiz) => (
								<QuizCard
									id={quiz.id}
									key={quiz.title}
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
							))
						: null}
				</div>
			</div>
		</div>
	);
}
