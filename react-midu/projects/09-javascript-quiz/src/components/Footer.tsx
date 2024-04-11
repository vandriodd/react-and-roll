import { useQuestionsData } from '../hooks/useQuestionsData'

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} correct - ❌ ${incorrect} incorrect - ⭕ ${unanswered} unanswered`}</strong>
    </footer>
  )
}

export default Footer
