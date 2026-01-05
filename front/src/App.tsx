import './App.scss'
import Location from './Components/Location.tsx'
import Price from './Components/Price.tsx'

function App() {
  

  return (
    <>
    <header className="page-header">
        <h1>IM_LEAVIN.bye</h1>
    </header>
    
    <main>
        <div className="container">
              <Location placeholder='Current location'/>
              <Location placeholder='Destination'/>
              <div className="divider"></div>
              <button className="submit-btn">SUBMIT</button>
              <div className="divider"></div> 
              <div style={{marginBottom: '10%'}}>
                <Price name='TOTAL' price={1000}/>
                <Price name='TOTAL' price={1000}/>
                <Price name='TOTAL' price={1000}/>
              </div>  
        </div>
    </main>
    </>
  )
}

export default App
