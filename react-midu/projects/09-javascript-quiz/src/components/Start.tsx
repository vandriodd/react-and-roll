import { Button } from '@mui/material'
import { useQuestionStore } from '../store/questions'

const LIMIT_QUESTIONS = 10

const Start = () => {
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button onClick={handleClick} variant='contained'>
      Start
    </Button>
  )
}

export default Start
