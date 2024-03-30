import { Link } from '../components/Link'

const i18n = {
  en: {
    title: 'About',
    description: 'Welcome to the About page',
    link: 'Home',
  },
  es: {
    title: 'Acerca de',
    description: 'Bienvenido a la página Acerca de',
    link: 'Inicio',
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

const AboutPage = ({ routeParams }) => {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.link}</Link>
    </>
  )
}

export default AboutPage
