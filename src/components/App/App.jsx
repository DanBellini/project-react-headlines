import './App.css'
import Scrollbars from './scrollbar/scrollbar'

export default function App() {

  return (
    <section className='app'>
      <section className='main-headlines'>
        <div className='first-headline'>
          <h1>primeira Manchete</h1>
        </div>
        <div className='latest-headlines'>
          <div>
            <h1>ultima manchete 1</h1>
          </div>
          <div>
            <h1>ultima manchete 2</h1>
          </div>
        </div>      
      </section>
      <section className='stories'>
        <Scrollbars/>
      </section>
      <section className='row-headlines'>
        <h1>Corpo do site</h1>
      </section>
      
    </section>
  )
}

