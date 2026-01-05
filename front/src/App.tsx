import './App.scss'
import Location from './Components/Location.tsx'
import Price from './Components/Price.tsx'

function App() {
  

  return (
    <>
    <header>
        <h1>IM_LEAVIN.bye</h1>
    </header>
    
    <main>
        <div className="container">
              <Location/>
              <div className="divider"></div>
              <button className="submit-btn">SUBMIT</button>
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
