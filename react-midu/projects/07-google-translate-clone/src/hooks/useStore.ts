import { useReducer } from "react";
import { Action, FromLanguage, Language, type State } from "../types.d";
import { AUTO_LANGUAGE } from "../constants";

//^ 1. Create an initial state
const initialState: State = {
  fromLang: "auto",
  toLang: "en",
  fromText: "",
  result: "",
  loading: false,
};

//^ 2. Create a reducer
const reducer = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    case "INTERCHANGE_LANGUAGES":
      if (state.fromLang === AUTO_LANGUAGE) return state;

      const loadingInter = state.fromText !== "";

      return {
        ...state,
        loadingInter,
        result: "",
        fromLang: state.toLang,
        toLang: state.fromLang,
      };
    case "SET_FROM_LANG":
      //^ Avoid refreshing the translation if the language hasn't changed
      if (state.fromLang === action.payload) return state;
      //^ Set loading to true if there is text to translate
      const loadingFrom = state.fromText !== "";

      return {
        ...state,
        fromLang: action.payload,
        result: "",
        loadingFrom,
      };
    case "SET_TO_LANG":
      if (state.fromLang === action.payload) return state;
      const loadingTo = state.fromText !== "";

      return {
        ...state,
        toLang: action.payload,
        result: "",
        loadingTo,
      };
    case "SET_FROM_TEXT":
      const loading = action.payload !== "";

      return {
        ...state,
        loading,
        fromText: action.payload,
      };
    case "SET_RESULT":
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
  }
};

export const useStore = () => {
  const [{ fromLang, toLang, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: "INTERCHANGE_LANGUAGES" });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: "SET_FROM_LANG", payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: "SET_TO_LANG", payload });
  };

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };

  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  return {
    fromLang,
    toLang,
    fromText,
    result,
    loading,
    setFromLanguage,
    interchangeLanguages,
    setToLanguage,
    setFromText,
    setResult,
  };
};
