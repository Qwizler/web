import { QuizHeader } from "@/components/QuizHeader";
import { QuizQuestion } from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { useGetQuiz } from "@/hooks/queries/useQuizQuery";
import type { TQuizQuestion } from "@/types";
import { Lightbulb, X } from "lucide-react";

const questions: TQuizQuestion[] = [
	{
		id: "3fc13aed-87e5-4faf-8b5b-6028dd701cde",
		question: "What is the capital of France?",
		choices: ["Paris", "London", "Berlin", "Madrid"],
		difficulty: "Easy",
	},
	{
		id: "b1575a2a-ea95-4021-8ee0-a025e60d4eef",
		question:
			"Which programming language was created by Brendan Eich in 1995 and became a cornerstone of web development, powering interactive features on countless websites worldwide?",
		choices: ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP"],
		difficulty: "Medium",
	},
	{
		id: "4300c283-91a7-4a0c-b72e-86df1a3a0c95",
		question: "What is 2+2?",
		choices: ["4", "5", "6"],
		difficulty: "Easy",
	},
	{
		id: "5939a09d-37c0-4be3-ab47-41399c7b0333",
		question:
			"In quantum mechanics, what is the term for the phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently, even when separated by a large distance?",
		choices: ["Quantum Entanglement", "Wave-Particle Duality"],
		difficulty: "Hard",
	},
	{
		id: "9a607059-57b2-4b22-ac15-a39b269a68b2",
		question: "Who painted the Mona Lisa?",
		choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
		difficulty: "Medium",
	},
];

export default function QuizPage({ quizId }: { quizId: string }) {
	const currentQuestionIndex = 0;
	const question = questions[0];
	const { data, isLoading, isError, error } = useGetQuiz(quizId);
	console.log(data);
	if (isError) console.error(error);
	const duration = data?.duration ? Number.parseInt(data.duration) : undefined;
	return (
		<div className="flex h-full w-full flex-col items-center gap-4 px-4 py-8 sm:px-6 lg:px-8">
			{data ? (
				<div className="w-full max-w-3xl flex flex-col gap-4">
					<QuizHeader
						id={data.id || ""}
						title={data.title || "Unnamed"}
						description={data.description || ""}
						durationSeconds={duration || 0}
						currentQuestion={currentQuestionIndex + 1}
						questions={10}
					/>
					<QuizQuestion
						key={question.id}
						id={question.id}
						question={question.question}
						choices={question.choices}
						difficulty={question.difficulty}
						currentQuestion={currentQuestionIndex + 1}
					/>
					<div className="mt-6 flex justify-center gap-4">
						<Button
							variant="outline"
							className="w-36 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<Lightbulb className="mr-2 h-4 w-4" />
							Get Hint
						</Button>
						<Button
							variant="destructive"
							className="w-36 transition-all duration-200"
						>
							<X className="mr-2 h-4 w-4" />
							Give Up
						</Button>
					</div>
				</div>
			) : null}
		</div>
	);
}
