import './App.css'
import { Articles } from './pages/Articles'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Another } from './pages/Another'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ReadMore } from './components/ReadMore'
import { MobileIcons } from './components/MobileIcons'
import { Login } from './components/Login'
import { WriteArticle } from './components/WriteArticle'

function App() {

  return (
    <div className='body-app'>
      <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/another" element={<Another />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/writearticle" element={<WriteArticle />} />
              <Route path="/readmore" element={<ReadMore />} />
              <Route path="/login" element={<Login />} />
          </Routes>
          <MobileIcons />
          <Footer />
      </Router>
    </div>
  )
}

export default App
