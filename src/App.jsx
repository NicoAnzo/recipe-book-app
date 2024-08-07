import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Recipes } from './components/Recipes'
import { Footer } from './components/Footer'
import './App.css'


function App() {
  return (
    <>
      <div id="container">
        <NavBar />
        <main id="main">
          <SideBar />
          <Recipes />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
