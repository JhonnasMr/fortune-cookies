import './App.css'
import PhraseCard from './components/phraseCard'
import { useState } from 'react'

function App() {
  const [bgImage, setBgImage] = useState(1);
  return (
    <>
      <section className={`container__pharse-card bg-${bgImage==0?'1':bgImage}`}>
        <h1 className='tittle'>Fortune Cookies</h1>
        <PhraseCard setBgImage={setBgImage}/>
      </section>
    </>
  )
}

export default App
