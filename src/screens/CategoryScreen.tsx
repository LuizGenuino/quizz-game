import React from 'react';
import { QuizConfig, Category } from '../types/quiz.types';

interface Props {
  quiz: QuizConfig;
  onSelect: (category: Category) => void;
  onBack: () => void;
}

export const CategoryScreen: React.FC<Props> = ({ quiz, onSelect, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 w-full max-w-4xl animate-fade-in px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center drop-shadow-lg">
        {quiz.texts.categoryTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {quiz.categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat)}
            style={{ animationDelay: `${i * 0.1}s` }}
            className={`
              group relative overflow-hidden
              bg-gradient-to-br ${cat.color}
              rounded-3xl p-6 sm:p-8
              shadow-xl shadow-black/30
              border-2 border-white/20
              transition-all duration-300
              hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
              active:scale-95
              animate-slide-up
            `}
          >
            <div className="absolute -top-6 -right-6 text-8xl opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-all duration-500">
              {cat.icon}
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
              <div className="text-5xl sm:text-6xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md text-center">
                {cat.name}
              </h3>
              <div className="text-white/90 text-xs sm:text-sm">
                ❓ {cat.questions.length} perguntas disponíveis
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onBack}
        className="text-white/70 hover:text-white transition-colors text-sm sm:text-base underline underline-offset-4"
      >
        {quiz.texts.back}
      </button>
    </div>
  );
};
