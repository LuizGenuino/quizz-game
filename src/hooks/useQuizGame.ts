import { useCallback, useEffect, useMemo, useState } from 'react';
import { Category, DifficultyKey, Question, QuizConfig } from '../types/quiz.types';

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export type AnswerState = 'idle' | 'selected' | 'correct' | 'wrong' | 'timeout';

export const useQuizGame = (
  quiz: QuizConfig,
  difficulty: DifficultyKey,
  category: Category
) => {
  const diffCfg = quiz.difficulties[difficulty];

  // Seleciona e embaralha as perguntas da rodada
  const questions: Question[] = useMemo(
    () => shuffle(category.questions).slice(0, category.questions.length),
    [category, diffCfg.questionsPerGame]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isConfirmed = answerState === 'correct' || answerState === 'wrong' || answerState === 'timeout';
  const isLast = currentIndex === questions.length - 1;

  const selectOption = useCallback(
    (index: number) => {
      if (isConfirmed) return;
      setSelectedIndex(index);
      setAnswerState('selected');
    },
    [isConfirmed]
  );

  const confirmAnswer = useCallback(() => {
    if (selectedIndex === null || isConfirmed) return;
    const correct = selectedIndex === currentQuestion.correctIndex;
    setAnswerState(correct ? 'correct' : 'wrong');
    if (correct) {
      setCorrectCount((c) => c + 1);
      setScore((s) => s + diffCfg.pointsPerQuestion);
    }
  }, [selectedIndex, isConfirmed, currentQuestion, diffCfg.pointsPerQuestion]);

  // Chamado quando o tempo da pergunta esgota
 const handleTimeout = useCallback(() => {
    setAnswerState((prevState) => {
      const alreadyConfirmed = 
        prevState === 'correct' || 
        prevState === 'wrong' || 
        prevState === 'timeout';
        
      if (alreadyConfirmed) return prevState;
      return 'timeout';
    });
  }, []);

  const nextQuestion = useCallback(() => {
    if (!isLast) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setAnswerState('idle');
    }
  }, [isLast]);

  return {
    questions,
    currentIndex,
    currentQuestion,
    selectedIndex,
    answerState,
    isConfirmed,
    isLast,
    correctCount,
    score,
    maxScore: questions.length * diffCfg.pointsPerQuestion,
    timePerQuestion: diffCfg.timePerQuestion,
    selectOption,
    confirmAnswer,
    nextQuestion,
    handleTimeout,
  };
};
