import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout, HomePage, ServicesPage, AboutPage, ContactPage, ScrollToTop } from './components/index'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;