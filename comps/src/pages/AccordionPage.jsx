import Accordion from '../components/Accordion'

const AccordionPage = () => {
  const items = [
    {
      id: '1',
      label: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: '2',
      label: 'Item 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: '3',
      label: 'Item 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    }
  ]

  return (
    <main>
      <h1>Accordion page</h1>
      <Accordion items={items} />
    </main>
  )
}

export default AccordionPage
