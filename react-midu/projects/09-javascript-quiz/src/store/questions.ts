import { create } from 'zustand'
import confetti from 'canvas-confetti'
import { type Question } from '../types.d'

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
}

// create must be receive a callback that returns an object that is the global state, the store, which contains the state and the actions that can change the state
//^ This function initializes the store with the initial state and the actions that can change and read the state.
//* set & get are methods that we can use to change and read the state
export const useQuestionStore = create<State>((set, get) => {
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
  }
})
