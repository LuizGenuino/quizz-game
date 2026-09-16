// ============================================================
// 🗂️ REGISTRO DE QUIZZES (ROTAS)
// Cada entrada vira uma rota: /{slug}
// Para um novo cliente: copie um arquivo em quizzes/, altere
// o slug e importe aqui.
// ============================================================
import { QuizConfig } from '../types/quiz.types';
import { CEFOG } from './cefog'

export const QUIZZES: QuizConfig[] = [CEFOG];

export const getQuizBySlug = (slug: string | undefined): QuizConfig | undefined =>
    QUIZZES.find((q) => q.slug === slug);
