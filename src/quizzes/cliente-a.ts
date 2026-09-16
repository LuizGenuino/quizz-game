// ============================================================
// 🧩 QUIZ: CLIENTE A — rota: /cliente-a
// Copie este arquivo, altere o slug e registre em quizzes/index.ts
// ============================================================
import { QuizConfig } from '../types/quiz.types';

export const clienteA: QuizConfig = {
  slug: 'cliente-a',
  brandName: 'Cliente A',
  brandIcon: '🧠',

  // Telas opcionais por rota
  showDifficultyScreen: true,
  showCategoryScreen: true,
  defaultDifficulty: 'easy',

  texts: {
    gameTitle: 'Quiz Geral',
    gameSubtitle: 'Teste seus conhecimentos!',
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
    bgGradient: 'from-indigo-900 via-purple-900 to-pink-900',
    primary: 'from-emerald-500 to-teal-600',
    danger: 'from-red-500 to-rose-600',
    correct: 'from-emerald-500 to-teal-600',
    wrong: 'from-red-500 to-rose-600',
  },

  difficulties: {
    easy:   { label: 'Fácil',   icon: '😊', color: 'from-emerald-500 to-teal-600',  timePerQuestion: 30, questionsPerGame: 5, pointsPerQuestion: 10 },
    medium: { label: 'Médio',   icon: '🤔', color: 'from-amber-500 to-orange-600',  timePerQuestion: 20, questionsPerGame: 8, pointsPerQuestion: 20 },
    hard:   { label: 'Difícil', icon: '🔥', color: 'from-red-500 to-rose-600',      timePerQuestion: 10, questionsPerGame: 10, pointsPerQuestion: 30 },
  },

  categories: [
    {
      id: 'conhecimentos-gerais',
      name: 'Conhecimentos Gerais',
      icon: '🌍',
      color: 'from-sky-500 to-blue-600',
      questions: [
        {
          question: 'Qual é o maior planeta do Sistema Solar?',
          options: ['Marte', 'Júpiter', 'Saturno', 'Netuno'],
          correctIndex: 1,
          explanation: 'Júpiter é o maior planeta, com diâmetro de ~140 mil km.',
        },
        {
          question: 'Em que continente fica o Egito?',
          options: ['Ásia', 'Europa', 'África', 'América'],
          correctIndex: 2,
        },
        {
          question: 'Quantos minutos tem uma hora?',
          options: ['30', '60', '90', '120'],
          correctIndex: 1,
        },
        {
          question: 'Qual é a capital do Brasil?',
          options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
          correctIndex: 2,
        },
        {
          question: 'Quantos dias tem um ano bissexto?',
          options: ['364', '365', '366', '367'],
          correctIndex: 2,
        },
        {
          question: 'Qual oceano banha o litoral brasileiro?',
          options: ['Pacífico', 'Índico', 'Ártico', 'Atlântico'],
          correctIndex: 3,
        },
        {
          question: 'Quantas cores tem o arco-íris?',
          options: ['5', '6', '7', '8'],
          correctIndex: 2,
        },
        {
          question: 'Qual é o maior animal do mundo?',
          options: ['Elefante africano', 'Baleia-azul', 'Girafa', 'Tubarão-branco'],
          correctIndex: 1,
        },
        {
          question: 'Em que ano o homem pisou na Lua pela primeira vez?',
          options: ['1959', '1969', '1979', '1989'],
          correctIndex: 1,
        },
        {
          question: 'Qual idioma tem mais falantes nativos no mundo?',
          options: ['Inglês', 'Espanhol', 'Mandarim', 'Hindi'],
          correctIndex: 2,
        },
      ],
    },
    {
      id: 'esportes',
      name: 'Esportes',
      icon: '⚽',
      color: 'from-emerald-500 to-green-600',
      questions: [
        {
          question: 'Quantos jogadores um time de futebol tem em campo?',
          options: ['9', '10', '11', '12'],
          correctIndex: 2,
        },
        {
          question: 'De quantos em quantos anos ocorrem as Olimpíadas?',
          options: ['2', '3', '4', '5'],
          correctIndex: 2,
        },
        {
          question: 'Quantos títulos mundiais de F1 tem Lewis Hamilton?',
          options: ['5', '6', '7', '8'],
          correctIndex: 2,
        },
        {
          question: 'Em qual esporte se usa o termo "home run"?',
          options: ['Beisebol', 'Basquete', 'Rúgbi', 'Golfe'],
          correctIndex: 0,
        },
        {
          question: 'Quantos pontos vale uma cesta de 3 no basquete?',
          options: ['1', '2', '3', '4'],
          correctIndex: 2,
        },
        {
          question: 'Qual país tem mais Copas do Mundo de futebol?',
          options: ['Alemanha', 'Argentina', 'Itália', 'Brasil'],
          correctIndex: 3,
        },
        {
          question: 'No tênis, qual torneio é jogado em grama?',
          options: ['Roland Garros', 'Wimbledon', 'US Open', 'Australian Open'],
          correctIndex: 1,
        },
        {
          question: 'Qual a duração oficial de um jogo de futebol?',
          options: ['80 min', '90 min', '100 min', '120 min'],
          correctIndex: 1,
        },
        {
          question: 'Em que esporte Michael Phelps se destacou?',
          options: ['Atletismo', 'Natação', 'Ciclismo', 'Ginástica'],
          correctIndex: 1,
        },
        {
          question: 'Quantas vezes o Brasil foi campeão mundial de vôlei masculino (Olimpíadas)?',
          options: ['1', '2', '3', '4'],
          correctIndex: 2,
        },
      ],
    },
    {
      id: 'tecnologia',
      name: 'Tecnologia',
      icon: '💻',
      color: 'from-violet-500 to-purple-600',
      questions: [
        {
          question: 'O que significa "HTTP"?',
          options: [
            'HyperText Transfer Protocol',
            'High Tech Transfer Process',
            'HyperText Technical Program',
            'Host Transfer Text Protocol',
          ],
          correctIndex: 0,
        },
        {
          question: 'Qual empresa criou o React?',
          options: ['Google', 'Microsoft', 'Meta (Facebook)', 'Apple'],
          correctIndex: 2,
        },
        {
          question: 'Qual destas é uma linguagem de programação?',
          options: ['HTML', 'CSS', 'Python', 'Photoshop'],
          correctIndex: 2,
        },
        {
          question: 'O que é "CPU"?',
          options: [
            'Central Processing Unit',
            'Computer Personal Unit',
            'Central Program Utility',
            'Core Processing Utility',
          ],
          correctIndex: 0,
        },
        {
          question: 'Quantos bits tem um byte?',
          options: ['4', '8', '16', '32'],
          correctIndex: 1,
        },
        {
          question: 'Qual sistema operacional é open source?',
          options: ['Windows', 'macOS', 'Linux', 'iOS'],
          correctIndex: 2,
        },
        {
          question: 'O que significa "IA"?',
          options: ['Internet Avançada', 'Inteligência Artificial', 'Interface Amigável', 'Informação Automática'],
          correctIndex: 1,
        },
        {
          question: 'Quem fundou a Microsoft junto com Paul Allen?',
          options: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
          correctIndex: 1,
        },
        {
          question: 'Qual é o padrão atual de web semântica?',
          options: ['HTML3', 'XHTML', 'HTML5', 'HTMLX'],
          correctIndex: 2,
        },
        {
          question: 'TypeScript é um superset de qual linguagem?',
          options: ['Python', 'Java', 'JavaScript', 'C#'],
          correctIndex: 2,
        },
      ],
    },
  ],
};
