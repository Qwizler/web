import type { DifficultyEnum, QuizDifficulty } from "@/types"


export const MatchDifficulty = (difficulty: DifficultyEnum): QuizDifficulty => {
	switch (difficulty.toString()) {
		case "EASY":
			return "Easy"
		case "MEDIUM":
			return "Medium"
		case "HARD":
			return "Hard"
		case "EXPERT":
			return "Expert"
		default:
			return "Unknown"
	}
}
