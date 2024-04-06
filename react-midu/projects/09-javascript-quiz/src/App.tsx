import { Container, Stack, Typography } from '@mui/material'
import JavaScriptLogo from './components/JavaScriptLogo'
import Start from './components/Start'
import './App.css'

const App = () => {
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
              Javascript Quiz
          </Typography>
        </Stack>
        <Start />
      </Container>
    </main>
  )
}

export default App
