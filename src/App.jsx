import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <FontAwesomeIcon 
            icon={faIdCard}
            className="title-icon" 
            style={{height: "80px", width: "auto" }} 
          />
          <div className="text">
            <h1 className="title">Uniform</h1>
            <h3 className="tagline">one form to rule them all</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
