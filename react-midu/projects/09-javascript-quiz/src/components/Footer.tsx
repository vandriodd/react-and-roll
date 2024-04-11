import { Button } from '@mui/material'
import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionStore } from '../store/questions'

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionStore(state => state.reset)

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} correct - ❌ ${incorrect} incorrect - ⭕ ${unanswered} unanswered`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>
          Reset Game
        </Button>
      </div>
    </footer>
  )
}

export default Footer
