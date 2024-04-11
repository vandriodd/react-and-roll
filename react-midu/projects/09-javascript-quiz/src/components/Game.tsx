import {
  Typography,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  IconButton,
} from '@mui/material'
import { useQuestionStore } from '../store/questions'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { type Question as QuestionType } from '../types.d'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import Footer from './Footer'

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)

  // This function returns a handleClick function
  // () => { ... } is replace by createHandleClick(index)
  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  const getBackgroundColor = (index: number) => {
    const { userSelectedAnswer, correctAnswer } = info

    // user has not selected an answer
    if (userSelectedAnswer == null) return 'transparent'

    // user has selected an answer but is incorrect
    if (index !== correctAnswer && index !== userSelectedAnswer)
      return 'transparent'

    // if this is the correct answer
    if (index === correctAnswer) return 'green'

    // user has selected an answer and is incorrect
    if (index === userSelectedAnswer) return 'red'

    return 'transparent'
  }

  return (
    <Card
      variant='outlined'
      sx={{ p: 2, bgcolor: '#222', textAlign: 'left', marginTop: 4 }}
    >
      <Typography variant='h5'>{info.question}</Typography>
      <SyntaxHighlighter language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              sx={{ bgcolor: getBackgroundColor(index) }}
            >
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const questionInfo = questions[currentQuestion]
  const goToNextQuestion = useQuestionStore((state) => state.goToNextQuestion)
  const goToPreviousQuestion = useQuestionStore(
    (state) => state.goToPreviousQuestion
  )

  return (
    <>
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <IconButton onClick={goToPreviousQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton onClick={goToNextQuestion} disabled={currentQuestion > questions.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}

export default Game
