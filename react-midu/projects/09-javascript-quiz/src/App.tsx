import { Container, Stack, Typography } from '@mui/material'
import JavaScriptLogo from './components/JavaScriptLogo'
import Start from './components/Start'
import './App.css'
import Game from './components/Game'
import { useQuestionStore } from './store/questions'

const App = () => {
  const questions = useQuestionStore((state) => state.questions)

  return (
    <main>
      <Container maxWidth='sm'>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='center'
        >
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            Javascript Quiz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  )
}

export default App
