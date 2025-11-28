import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Filters from './components/Filters'
import UniversityList from './components/UniversityList'
import Deadlines from './components/Deadlines'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Toast from './components/Toast'
import { universities } from './data/universities'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    country: '',
    language: '',
    area: ''
  })
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.country.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = !filters.country || uni.country === filters.country
    const matchesLanguage = !filters.language || uni.language === filters.language
    const matchesArea = !filters.area || uni.area === filters.area

    return matchesSearch && matchesCountry && matchesLanguage && matchesArea
  })

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  const handleStartPreparation = (universityName) => {
    setToastMessage(`Sua preparação para ${universityName} foi iniciada! Verifique seu e-mail.`)
    setShowToast(true)
    setTimeout(() => {
      setSelectedUniversity(null)
    }, 500)
  }

  return (
    <div className="app">
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filters filters={filters} setFilters={setFilters} />
      <UniversityList 
        universities={filteredUniversities}
        onSelectUniversity={setSelectedUniversity}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Deadlines />
      <HowItWorks />
      <Footer />
      
      {selectedUniversity && (
        <Modal 
          university={selectedUniversity}
          onClose={() => setSelectedUniversity(null)}
          onStartPreparation={handleStartPreparation}
        />
      )}
      
      {showToast && (
        <Toast 
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}

export default App