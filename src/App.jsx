import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TabContent from './components/TabContent'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('technical')

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={activeTab === 'technical' ? 'active' : ''}
            onClick={() => setActiveTab('technical')}
          >
            Technical Trainers
          </button>
          <button
            className={activeTab === 'soft' ? 'active' : ''}
            onClick={() => setActiveTab('soft')}
          >
            Soft Skill Trainers
          </button>
          <button
            className={activeTab === 'gallery' ? 'active' : ''}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
        </div>
        <TabContent activeTab={activeTab} />
      </div>
      <Footer />
    </div>
  )
}

export default App
