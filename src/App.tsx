import { Router } from './components/Router'
import "./global.scss"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
