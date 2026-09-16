// ============================================================
// 📄 Página do Quiz — monta o fluxo de telas conforme a config
// de cada rota (dificuldade e categoria são opcionais por rota)
// ============================================================
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getQuizBySlug } from '../quizzes';
import { QuizScreen, DifficultyKey, Category, QuizResult } from '../types/quiz.types';
import { Footer } from '../components/Footer';
import { HomeScreen } from '../screens/HomeScreen';
import { DifficultyScreen } from '../screens/DifficultyScreen';
import { CategoryScreen } from '../screens/CategoryScreen';
import { GameScreen } from '../screens/GameScreen';
import { FeedbackScreen } from '../screens/FeedbackScreen';

export const QuizPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const quiz = getQuizBySlug(slug);

  const [screen, setScreen] = useState<QuizScreen>('home');
  const [difficulty, setDifficulty] = useState<DifficultyKey>(
    quiz?.defaultDifficulty ?? 'easy'
  );
  const [category, setCategory] = useState<Category | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  if (!quiz) return <Navigate to="/" replace />;

  // Decide para onde ir ao clicar em "Iniciar Jogo"
  const firstStep = (): QuizScreen => {
    if (quiz.showDifficultyScreen) return 'difficulty';
    if (quiz.showCategoryScreen) return 'category';
    // Sem telas opcionais: vai direto ao jogo com a 1ª categoria
    setCategory(quiz.categories[0]);
    return 'game';
  };

  const handleStart = () => setScreen(firstStep());

  const handleDifficultySelect = (d: DifficultyKey) => {
    setDifficulty(d);
    if (quiz.showCategoryScreen) {
      setScreen('category');
    } else {
      setCategory(quiz.categories[0]);
      setScreen('game');
    }
  };

  const handleCategorySelect = (c: Category) => {
    setCategory(c);
    setScreen('game');
  };

  const restart = () => {
    setResult(null);
    setCategory(null);
    setScreen('home');
  };

  return (
    <div
      className={`
        min-h-screen w-full
        bg-gradient-to-br ${quiz.colors.bgGradient}
        relative overflow-hidden
        flex flex-col
      `}
    >
      {/* Bolhas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Conteúdo */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {screen === 'home' && <HomeScreen quiz={quiz} onStart={handleStart} />}

        {screen === 'difficulty' && quiz.showDifficultyScreen && (
          <DifficultyScreen
            quiz={quiz}
            onSelect={handleDifficultySelect}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'category' && quiz.showCategoryScreen && (
          <CategoryScreen
            quiz={quiz}
            onSelect={handleCategorySelect}
            onBack={() =>
              quiz.showDifficultyScreen ? setScreen('difficulty') : setScreen('home')
            }
          />
        )}

        {screen === 'game' && category && (
          <GameScreen
            key={`${difficulty}-${category.id}-${Date.now()}`}
            quiz={quiz}
            difficulty={difficulty}
            category={category}
            onFinish={(r) => {
              setResult(r);
              setScreen('feedback');
            }}
            onExit={restart}
          />
        )}

        {screen === 'feedback' && result && (
          <FeedbackScreen
            quiz={quiz}
            result={result}
            onPlayAgain={restart}
            onExit={restart}
          />
        )}
      </main>

      {/* ⚓ Footer geral — presente em todas as rotas */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};
