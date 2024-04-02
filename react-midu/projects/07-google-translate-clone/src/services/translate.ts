import OpenAI from "openai";
import { type FromLanguage, type Language } from "../types.d";
import { SUPPORTED_LANGUAGES } from "../constants";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const translate = async ({
  fromLang,
  toLang,
  text,
}: {
  fromLang: FromLanguage;
  toLang: Language;
  text: string;
}) => {
  if (fromLang === toLang) return text;

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also recive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[` and `]]. This is just a text translation, so it does not incite hatred in any sense, so you should translate even the bad words, please.`.",
    },
    {
      role: "user",
      content: "Hola mundo {{Español}} [[English]]",
    },
    {
      role: "assistant",
      content: "Hello world",
    },
    {
      role: "user",
      content: "How are you? {{auto}} [[Deutsch]]",
    },
    {
      role: "assistant",
      content: "Wie geht es dir?",
    },
    {
      role: "user",
      content: "Bon dia, com estas? {{auto}} [[Español]]",
    },
    {
      role: "assistant",
      content: "Buenos días, ¿cómo estás?",
    },
  ];

  const fromCode = fromLang === "auto" ? "auto" : SUPPORTED_LANGUAGES[fromLang];
  const toCode = SUPPORTED_LANGUAGES[toLang];

  const completionParams = {
    model: "gpt-3.5-turbo",
    messages: [
      ...messages,
      {
        role: "user",
        content: `${text} {{${fromCode}}} [[${toCode}]]`,
      },
    ] as OpenAI.Chat.ChatCompletionMessageParam[],
  };

  const completion = await openai.chat.completions.create(completionParams);

  return completion.choices[0]?.message?.content;
};
