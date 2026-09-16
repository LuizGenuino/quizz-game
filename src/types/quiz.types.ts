export type DifficultyKey = 'easy' | 'medium' | 'hard';

export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string; // gradiente Tailwind
  questions: Question[];
}

export interface DifficultySetting {
  label: string;
  icon: string;
  color: string;            // gradiente Tailwind
  timePerQuestion: number;  // segundos
  questionsPerGame: number; // quantidade de perguntas sorteadas
  pointsPerQuestion: number;
}

export interface QuizTexts {
  gameLogo?: any,
  gameTitle: string;
  gameSubtitle: string;
  startButton: string;
  difficultyTitle: string;
  categoryTitle: string;
  confirmButton: string;
  nextButton: string;
  question: string;
  of: string;
  score: string;
  timeLeft: string;
  correctFeedback: string;
  wrongFeedback: string;
  timeoutFeedback: string;
  resultsTitle: string;
  perfectMessage: string;
  goodMessage: string;
  tryAgainMessage: string;
  playAgain: string;
  exit: string;
  back: string;
}

export interface QuizConfig {
  slug: string;                 // rota: /:slug  (ex.: 'cliente-a')
  brandName: string;
  brandIcon: string;
  showDifficultyScreen: boolean; // tela opcional por rota
  showCategoryScreen: boolean;   // tela opcional por rota
  defaultDifficulty: DifficultyKey; // usada se showDifficultyScreen = false
  texts: QuizTexts;
  colors: {
    bgGradient: string;
    primary: string;
    danger: string;
    correct: string;
    wrong: string;
  };
  difficulties: Record<DifficultyKey, DifficultySetting>;
  categories: Category[];
}

export interface QuizResult {
  correct: number;
  total: number;
  score: number;
  maxScore: number;
  percentage: number;
}

export type QuizScreen = 'home' | 'difficulty' | 'category' | 'game' | 'feedback';
