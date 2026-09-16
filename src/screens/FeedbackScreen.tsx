import React, { useEffect, useState } from 'react';
import { QuizConfig, QuizResult } from '../types/quiz.types';
import { Button } from '../components/Button';

interface Props {
  quiz: QuizConfig;
  result: QuizResult;
  onPlayAgain: () => void;
  onExit: () => void;
}

export const FeedbackScreen: React.FC<Props> = ({ quiz, result, onPlayAgain, onExit }) => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; emoji: string }>>([]);

  const isPerfect = result.percentage === 100;
  const isGood = result.percentage >= 60;

  const message = isPerfect
    ? quiz.texts.perfectMessage
    : isGood
    ? quiz.texts.goodMessage
    : quiz.texts.tryAgainMessage;

  const trophy = isPerfect ? '🏆' : isGood ? '🎉' : '💪';

  useEffect(() => {
    if (isPerfect || isGood) {
      const emojis = ['🎉', '⭐', '✨', '🎊', '💫'];
      setConfetti(
        Array.from({ length: 30 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        }))
      );
    }
  }, [isPerfect, isGood]);

  // Raio para o círculo de progresso (SVG)
  const R = 54;
  const CIRC = 2 * Math.PI * R;
  const dashOffset = CIRC - (result.percentage / 100) * CIRC;

  return (
    <div className="relative flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-2xl animate-fade-in px-4">
      {(isPerfect || isGood) &&
        confetti.map((c) => (
          <div
            key={c.id}
            className="absolute top-0 text-3xl sm:text-4xl pointer-events-none animate-confetti"
            style={{ left: `${c.left}%`, animationDelay: `${c.delay}s` }}
          >
            {c.emoji}
          </div>
        ))}

      <div className="relative">
        <div
          className={`
            absolute inset-0 blur-3xl opacity-40 animate-pulse-slow
            ${isPerfect || isGood ? 'bg-emerald-400' : 'bg-amber-500'}
          `}
        />
        <div className="relative text-7xl sm:text-8xl md:text-9xl animate-bounce-slow">{trophy}</div>
      </div>

      <div className="text-center space-y-2 sm:space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-2xl">
          {quiz.texts.resultsTitle}
        </h2>
        <p className="text-white/80 text-base sm:text-lg md:text-xl">{message}</p>
      </div>

      {/* Círculo de porcentagem */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 animate-pop">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke={isPerfect || isGood ? '#34d399' : '#fbbf24'}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl sm:text-4xl font-black text-white">{result.percentage}%</span>
          <span className="text-white/60 text-xs">acertos</span>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 w-full max-w-sm">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
          <div>
            <div className="text-white/60 text-xs sm:text-sm">Acertos</div>
            <div className="text-emerald-300 text-xl sm:text-2xl font-bold">
              {result.correct}/{result.total}
            </div>
          </div>
          <div>
            <div className="text-white/60 text-xs sm:text-sm">{quiz.texts.score}</div>
            <div className="text-white text-xl sm:text-2xl font-bold">{result.score}</div>
          </div>
          <div>
            <div className="text-white/60 text-xs sm:text-sm">Máximo</div>
            <div className="text-amber-300 text-xl sm:text-2xl font-bold">{result.maxScore}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
        <Button onClick={onPlayAgain} gradient={quiz.colors.primary} size="md" icon="🔄" fullWidth>
          {quiz.texts.playAgain}
        </Button>
        <Button onClick={onExit} gradient={quiz.colors.danger} size="md" icon="🚪" fullWidth>
          {quiz.texts.exit}
        </Button>
      </div>
    </div>
  );
};
