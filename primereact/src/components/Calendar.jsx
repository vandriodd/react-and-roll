import { useState } from 'react'
import { Calendar } from 'primereact/calendar'

export default function IconDemo() {
  const [date, setDate] = useState(null)

  return (
    <article>
      <h3>Calendar</h3>
      <div style={{ display: 'flex' }}>
        <div>
          <label htmlFor='buttondisplay'>Button Display</label>
          <Calendar
            id='buttondisplay'
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
          />
        </div>
        <div>
          <label htmlFor='buttondisplay'>Icon Display</label>

          <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
        </div>
        <div>
          <label htmlFor='buttondisplay'>Icon Template</label>

          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
            timeOnly
            icon={() => <i className='pi pi-clock' />}
          />
        </div>
      </div>
    </article>
  )
}
