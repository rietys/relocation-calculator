import { useState } from 'react'
import './App.scss'
import Location from './Components/Location.tsx'
import Price from './Components/Price.tsx'

// await new Promise(resolve => setTimeout(resolve, 500));

function App() {
  const [instruction, setInstruction] = useState(['SUBMIT', '']);

  async function Submitting() {
    console.log('SUBMITTED')
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-']
    console.log(symbols)
    while (true)
      for (let i: number = 0; i < symbols.length; i++) {
        console.log(i, 'iteration')
        setInstruction(['PLEASE WAIT', symbols[i]])
        console.log('symbol', symbols[i], 'used')
        await new Promise(resolve => setTimeout(resolve, 60))
        console.log('waiting')
      }
  }
  

  return (
    <>
    <header>
        <h1>IM_LEAVIN.bye</h1>
    </header>
    
    <main>
        <div className="container">
              <Location/>
              <div className="divider"></div>
              <button className="submit-btn" onClick={Submitting}>
                <h1 style={{display: 'inline'}}>{instruction[0]}</h1>
                <h1 style={{position: 'absolute', display: 'inline'}}>{instruction[1]}</h1>
              </button>
              <div className="divider"></div> 
              <div style={{marginBottom: '10%'}}>
                <Price ticketPrice={300} rentPrice={700}/>
              </div>
        </div>
    </main>
    </>
  )
}

export default App