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
      return {
        ...state,
        fromLang: state.toLang,
        toLang: state.fromLang,
      };
    case "SET_FROM_LANG":
      return {
        ...state,
        fromLang: action.payload,
      };
    case "SET_TO_LANG":
      return {
        ...state,
        toLang: action.payload,
      };
    case "SET_FROM_TEXT":
      return {
        ...state,
        loading: true,
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
