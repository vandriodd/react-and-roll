import { create } from 'zustand'
import confetti from 'canvas-confetti'
// Middleware -> is a function that wraps the store and allows you to modify the behavior of the store
import { persist } from 'zustand/middleware'
import { type Question } from '../types.d'

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
}

// create must be receive a callback that returns an object that is the global state, the store, which contains the state and the actions that can change the state
//^ This function initializes the store with the initial state and the actions that can change and read the state.
//* set & get are methods that we can use to change and read the state
export const useQuestionStore = create<State>()(persist((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5173/data.json')
      const json = await res.json()

      // Shuffle the questions and get the first n questions
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },
    selectAnswer: (questionId, answerIndex) => {
      const { questions } = get()
      // structuredClone -> does a deep copy of the object
      const newQuestions = structuredClone(questions)
      // find the question index
      const questionIndex = newQuestions.findIndex((q) => q.id === questionId)
      // get the question info
      const questionInfo = newQuestions[questionIndex]
      // check if the answer is correct
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

      if (isCorrectUserAnswer) confetti()

      // update info in the copy of the question
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex,
      }
      // update state
      set({ questions: newQuestions })
    },
    goToNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion })
      }
    },
    goToPreviousQuestion() {
      const { currentQuestion } = get()
      const previousQuestion = currentQuestion - 1
      if (previousQuestion >= 0) {
        set({ currentQuestion: previousQuestion })
      }
    },
    reset: () => {
      set({ currentQuestion: 0, questions: [] })
    }
  }
}, {
  name: 'questions'
}))

// We need to specify an prefix to avoid conflicts with other stores
