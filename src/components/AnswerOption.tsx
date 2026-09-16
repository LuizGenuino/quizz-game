import React from 'react';
import { QuizConfig } from '../types/quiz.types';
import { AnswerState } from '../hooks/useQuizGame';

interface Props {
  label: string;           // Texto da alternativa
  letter: string;          // A, B, C, D...
  index: number;
  isSelected: boolean;
  isCorrectAnswer: boolean;
  answerState: AnswerState;
  quiz: QuizConfig;
  onSelect: (index: number) => void;
  animationDelay?: number;
}

export const AnswerOption: React.FC<Props> = ({
  label,
  letter,
  index,
  isSelected,
  isCorrectAnswer,
  answerState,
  quiz,
  onSelect,
  animationDelay = 0,
}) => {
  const isConfirmed = answerState === 'correct' || answerState === 'wrong' || answerState === 'timeout';

  // Estilos conforme o estado
  let stateClass = 'bg-white/10 border-white/20 hover:bg-white/20 hover:scale-[1.02] hover:border-white/40';
  let letterClass = 'bg-white/20 text-white';
  let icon = '';

  if (isSelected && answerState === 'selected') {
    stateClass = `bg-gradient-to-r ${quiz.colors.primary} border-white/50 scale-[1.02] shadow-lg`;
    letterClass = 'bg-white/30 text-white';
  }

  if (isConfirmed) {
    if (isCorrectAnswer) {
      stateClass = `bg-gradient-to-r ${quiz.colors.correct} border-emerald-300 scale-[1.02] shadow-lg animate-pop`;
      letterClass = 'bg-white/30 text-white';
      icon = '✓';
    } else if (isSelected) {
      stateClass = `bg-gradient-to-r ${quiz.colors.wrong} border-rose-300 animate-shake`;
      letterClass = 'bg-white/30 text-white';
      icon = '✗';
    } else {
      stateClass = 'bg-white/5 border-white/10 opacity-50';
    }
  }

  return (
    <button
      onClick={() => onSelect(index)}
      disabled={isConfirmed}
      style={{ animationDelay: `${animationDelay}s` }}
      className={`
        w-full text-left
        flex items-center gap-3 sm:gap-4
        p-3 sm:p-4 rounded-xl sm:rounded-2xl
        border-2 backdrop-blur-sm
        transition-all duration-300
        animate-slide-up
        ${stateClass}
        ${!isConfirmed ? 'cursor-pointer active:scale-95' : 'cursor-default'}
      `}
    >
      <span
        className={`
          flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10
          rounded-full flex items-center justify-center
          font-black text-sm sm:text-base
          ${letterClass}
        `}
      >
        {icon || letter}
      </span>
      <span className="text-white font-medium text-sm sm:text-base md:text-lg leading-snug">
        {label}
      </span>
    </button>
  );
};
