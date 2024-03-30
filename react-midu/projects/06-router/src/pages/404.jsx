import { Link } from '../components/Link'

const Page404 = () => {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='GIF of the This Is Fine dog burning alive' />
      </div>
      <Link to='/'>Go to Home</Link>
    </>
  )
}

export default Page404
