import React, { useEffect, useState } from 'react';
import { QuizConfig, DifficultyKey, Category, QuizResult } from '../types/quiz.types';
import { useQuizGame } from '../hooks/useQuizGame';
import { useTimer } from '../hooks/useTimer';
import { Timer } from '../components/Timer';
import { Button } from '../components/Button';
import { AnswerOption } from '../components/AnswerOption';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

interface Props {
  quiz: QuizConfig;
  difficulty: DifficultyKey;
  category: Category;
  onFinish: (result: QuizResult) => void;
  onExit: () => void;
}

export const GameScreen: React.FC<Props> = ({ quiz, difficulty, category, onFinish, onExit }) => {

      const [isNext, setIsNext] = useState(false)

  const {
    questions,
    currentIndex,
    currentQuestion,
    selectedIndex,
    answerState,
    isConfirmed,
    isLast,
    correctCount,
    score,
    maxScore,
    timePerQuestion,
    selectOption,
    confirmAnswer,
    nextQuestion,
    handleTimeout,
  } = useQuizGame(quiz, difficulty, category);

  const timer = useTimer({
    initialSeconds: timePerQuestion,
    isRunning: !isConfirmed && !isNext,
    onComplete: handleTimeout,
  });

  // Reinicia o timer a cada pergunta
  useEffect(() => {
    timer.setSeconds(timePerQuestion);
    setIsNext(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const goNext = () => {
    if (isLast) {
      const total = questions.length;
      const percentage = Math.round((correctCount / total) * 100);
      onFinish({ correct: correctCount, total, score, maxScore, percentage });
    } else {
        setIsNext(true)
      nextQuestion();
    }
  };

  const feedbackBanner = (() => {
    if (answerState === 'correct')
      return { text: quiz.texts.correctFeedback, cls: 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300' };
    if (answerState === 'wrong')
      return { text: quiz.texts.wrongFeedback, cls: 'bg-rose-500/20 border-rose-400/50 text-rose-300' };
    if (answerState === 'timeout')
      return { text: quiz.texts.timeoutFeedback, cls: 'bg-amber-500/20 border-amber-400/50 text-amber-300' };
    return null;
  })();

  const progress = ((currentIndex + (isConfirmed ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 animate-fade-in">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <button
          onClick={onExit}
          className="text-white/70 hover:text-white transition-colors text-sm underline underline-offset-4 order-2 sm:order-1"
        >
          {quiz.texts.exit}
        </button>
        <div className="flex gap-2 order-1 sm:order-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
            <span className="text-white font-bold text-sm sm:text-base">
              {quiz.texts.question} {currentIndex + 1} {quiz.texts.of} {questions.length}
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
            <span className="text-white font-bold text-sm sm:text-base">
              ⭐ {score}
            </span>
          </div>
        </div>
      </div>

      {/* Barra de progresso do quiz */}
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${quiz.colors.primary} transition-all duration-500 rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Timer por pergunta */}
      <div className="w-full max-w-md">
        <Timer seconds={timer.seconds} total={timePerQuestion} label={quiz.texts.timeLeft} />
      </div>

      {/* Enunciado */}
      <div
        key={`q-${currentIndex}`}
        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 animate-pop"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{category.icon}</span>
          <span className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">
            {category.name}
          </span>
        </div>
        <h3 className="text-white font-bold text-lg sm:text-2xl md:text-3xl leading-snug">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Alternativas */}
      <div className="w-full grid grid-cols-1 gap-2 sm:gap-3" key={`opts-${currentIndex}`}>
        {currentQuestion.options.map((option, i) => (
          <AnswerOption
            key={i}
            label={option}
            letter={LETTERS[i]}
            index={i}
            isSelected={selectedIndex === i}
            isCorrectAnswer={i === currentQuestion.correctIndex}
            answerState={answerState}
            quiz={quiz}
            onSelect={selectOption}
            animationDelay={i * 0.08}
          />
        ))}
      </div>

      {/* Banner de feedback */}
      {feedbackBanner && (
        <div
          className={`
            w-full text-center font-bold text-base sm:text-lg
            border rounded-xl sm:rounded-2xl py-3 px-4
            animate-pop backdrop-blur-md
            ${feedbackBanner.cls}
          `}
        >
          {feedbackBanner.text}
          {currentQuestion.explanation && answerState !== 'timeout' && (
            <div className="text-white/80 text-xs sm:text-sm font-normal mt-1">
              💡 {currentQuestion.explanation}
            </div>
          )}
        </div>
      )}

      {/* Ações */}
      <div className="w-full max-w-md">
        {!isConfirmed ? (
          <Button
            onClick={confirmAnswer}
            gradient={quiz.colors.primary}
            size="md"
            icon="✓"
            fullWidth
            disabled={selectedIndex === null}
          >
            {quiz.texts.confirmButton}
          </Button>
        ) : (
          <Button onClick={goNext} gradient={quiz.colors.primary} size="md" icon="➡️" fullWidth>
            {quiz.texts.nextButton}
          </Button>
        )}
      </div>
    </div>
  );
};
