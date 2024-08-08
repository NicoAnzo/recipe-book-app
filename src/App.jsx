import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Recipes } from './components/Recipes'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from './components/DashboardPage'
import { ItemDetailsPage } from './components/ItemDetailsPage'
import { AboutPage } from './components/AboutPage'
import { NotFoundPage } from './components/NotFoundPage'
import './App.css'



function App() {
  return (
    <>
      <div id="container">
        <NavBar />
       
        <main id="main">
          <SideBar />

          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/" element={<ItemDetailsPage />} />
            <Route path="/" element={<AboutPage />} />
            <Route path="/" element={<NotFoundPage />} />

          </Routes>

          <Recipes />


        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
