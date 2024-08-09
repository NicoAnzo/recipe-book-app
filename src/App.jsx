import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { RecipeList } from './components/RecipeList'
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
            <Route path="/itemDetailsPage" element={<ItemDetailsPage />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/notFoundPage" element={<NotFoundPage />} />
          </Routes>

          {/* <RecipesList /> */}


        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
