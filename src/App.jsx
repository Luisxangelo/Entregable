import { useState } from 'react'
import './App.css'
import dbQuote from "./db/quote.json"
import {getRandom} from "./utils/random.js"
import QuoteBox from './components/Quotebox.jsx'


const bgImages = ["img1" , "img2" , "img3" ," img4" ]

function App() {
  const[quote, setQuote] = useState(getRandom(dbQuote))
  const [bgImage , setBgImage] = useState(getRandom(bgImages))

  const handleChangeQuote = () =>{
    setQuote(getRandom(dbQuote));
    setBgImage(getRandom(bgImages))
}

  return (
  <>
  <main className= {`app ${bgImage}`}>

    <section className='app_container'>
      <h1 className='title'>InfoGalaxy</h1> 
      <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} author={quote.author} />
    </section>
  </main>
  </>)
}

export default App
