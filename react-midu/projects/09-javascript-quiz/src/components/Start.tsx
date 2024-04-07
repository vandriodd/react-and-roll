import { Button } from '@mui/material'
import { useQuestionStore } from '../store/questions'

const Start = () => {
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(5)
  }

  return (
    <Button onClick={handleClick} variant='contained'>
      Start
    </Button>
  )
}

export default Start
