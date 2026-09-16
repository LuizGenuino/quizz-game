// ============================================================
// 🍔 QUIZ: CLIENTE B (ex.: restaurante) — rota: /cliente-b
// Exemplo SEM tela de dificuldade e COM tela de categoria.
// ============================================================
import { QuizConfig } from '../types/quiz.types';

export const clienteB: QuizConfig = {
  slug: 'cliente-b',
  brandName: 'Cliente B',
  brandIcon: '🍔',

  showDifficultyScreen: false,   // pula a tela de dificuldade
  showCategoryScreen: true,
  defaultDifficulty: 'easy',     // usa esta dificuldade automaticamente

  texts: {
    gameTitle: 'Quiz Gastronomia',
    gameSubtitle: 'Você é um verdadeiro chef?',
    startButton: 'Iniciar Jogo',
    difficultyTitle: 'Escolha a Dificuldade',
    categoryTitle: 'Escolha a Categoria',
    confirmButton: 'Confirmar',
    nextButton: 'Próxima Pergunta',
    question: 'Pergunta',
    of: 'de',
    score: 'Pontos',
    timeLeft: 'Tempo',
    correctFeedback: 'Correto! 🎉',
    wrongFeedback: 'Errado! 😅',
    timeoutFeedback: 'Tempo esgotado! ⏰',
    resultsTitle: 'Resultado Final',
    perfectMessage: 'Perfeito! Você gabaritou! 🏆',
    goodMessage: 'Muito bem! Ótimo desempenho! 👏',
    tryAgainMessage: 'Continue tentando, você consegue! 💪',
    playAgain: 'Jogar Novamente',
    exit: 'Sair',
    back: '← Voltar',
  },

  colors: {
    bgGradient: 'from-orange-900 via-red-900 to-rose-900',
    primary: 'from-amber-500 to-orange-600',
    danger: 'from-red-500 to-rose-600',
    correct: 'from-emerald-500 to-teal-600',
    wrong: 'from-red-500 to-rose-600',
  },

  difficulties: {
    easy:   { label: 'Fácil',   icon: '😊', color: 'from-emerald-500 to-teal-600', timePerQuestion: 30, questionsPerGame: 5, pointsPerQuestion: 10 },
    medium: { label: 'Médio',   icon: '🤔', color: 'from-amber-500 to-orange-600', timePerQuestion: 20, questionsPerGame: 8, pointsPerQuestion: 20 },
    hard:   { label: 'Difícil', icon: '🔥', color: 'from-red-500 to-rose-600',     timePerQuestion: 10, questionsPerGame: 10, pointsPerQuestion: 30 },
  },

  categories: [
    {
      id: 'comida-brasileira',
      name: 'Comida Brasileira',
      icon: '🇧🇷',
      color: 'from-emerald-500 to-green-600',
      questions: [
        {
          question: 'Qual é o prato típico feito com feijão preto e carnes?',
          options: ['Moqueca', 'Feijoada', 'Vatapá', 'Acarajé'],
          correctIndex: 1,
        },
        {
          question: 'A coxinha é feita principalmente com qual recheio?',
          options: ['Carne moída', 'Frango', 'Queijo', 'Camarão'],
          correctIndex: 1,
        },
        {
          question: 'O acarajé é típico de qual estado?',
          options: ['São Paulo', 'Minas Gerais', 'Bahia', 'Paraná'],
          correctIndex: 2,
        },
        {
          question: 'Qual fruta é a base da caipirinha tradicional?',
          options: ['Limão', 'Maracujá', 'Caju', 'Morango'],
          correctIndex: 0,
        },
        {
          question: 'Pão de queijo é tradicional de qual estado?',
          options: ['Rio de Janeiro', 'Bahia', 'Minas Gerais', 'Pernambuco'],
          correctIndex: 2,
        },
      ],
    },
    {
      id: 'cozinha-internacional',
      name: 'Cozinha Internacional',
      icon: '🌎',
      color: 'from-sky-500 to-blue-600',
      questions: [
        {
          question: 'O sushi é um prato típico de qual país?',
          options: ['China', 'Coreia do Sul', 'Japão', 'Tailândia'],
          correctIndex: 2,
        },
        {
          question: 'A pizza margherita tem origem em qual país?',
          options: ['França', 'Itália', 'Espanha', 'Grécia'],
          correctIndex: 1,
        },
        {
          question: 'O croissant é tradicional de qual país?',
          options: ['França', 'Bélgica', 'Suíça', 'Alemanha'],
          correctIndex: 0,
        },
        {
          question: 'O taco é um prato típico de qual país?',
          options: ['Espanha', 'Argentina', 'México', 'Peru'],
          correctIndex: 2,
        },
        {
          question: 'A paella é originária de qual país?',
          options: ['Portugal', 'Espanha', 'Itália', 'França'],
          correctIndex: 1,
        },
      ],
    },
  ],
};
