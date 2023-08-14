import './App.css'
import { Articles } from './pages/Articles'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Another } from './pages/Another'

function App() {

  return (
    <div className='body-app'>
      <Articles />
      <Home />
      <Profile />
      <Another />
    </div>
  )
}

export default App
