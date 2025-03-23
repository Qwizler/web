import { QuizHeader } from "@/components/QuizHeader";
import { QuizQuestion } from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import type { Quiz, TQuizQuestion } from "@/types";

const quiz: Quiz = {
	id: "26ae8d2f-c9dc-4b66-a738-67a5706e2337",
	title: "Quiz 1",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

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
	return (
		<div className="flex h-full w-full flex-col items-center gap-4 px-4 py-8 sm:px-6 lg:px-8">
			<div className="w-full max-w-3xl flex flex-col gap-4">
				<QuizHeader
					id={quiz.id}
					title={quiz.title}
					description={quiz.description}
					questions={quiz.questions}
					durationSeconds={quiz.durationSeconds}
					startQuiz={quiz.startQuiz}
					currentQuestion={currentQuestionIndex + 1}
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
						<svg
							className="mr-2 h-4 w-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
						Get Hint
					</Button>
					<Button
						variant="destructive"
						className="w-36 transition-all duration-200"
					>
						<svg
							className="mr-2 h-4 w-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
						Give Up
					</Button>
				</div>
			</div>
		</div>
	);
}
