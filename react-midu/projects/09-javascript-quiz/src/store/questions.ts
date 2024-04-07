import { create } from 'zustand'
import { type Question } from '../types.d'

interface State {
  questions: Question[];
  currentQuestions: number;
  fetchQuestions: (limit: number) => Promise<void>;
}

// create must be receive a callback that returns an object that is the global state, the store, which contains the state and the actions that can change the state
//^ This function initializes the store with the initial state and the actions that can change and read the state.
//* set & get are methods that we can use to change and read the state
export const useQuestionStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
      set({
        questions: [
          {
            id: 1,
            question: '¿Cuál es la salida de este código?',
            code: 'console.log(typeof NaN)',
            answers: ['undefined', 'NaN', 'string', 'number'],
            correctAnswer: 3,
          },
        ],
      })
    },
  }
})
