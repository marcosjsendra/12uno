import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroBento from './components/HeroBento'
import Footer from './components/Footer'

const WORDS = ['Dev', 'Tech', 'Design', 'Code', 'Web', 'Systems']

function App() {
  const [currentWord, setCurrentWord] = useState(WORDS[0])
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const cycleWords = () => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentWord(prev => WORDS[(WORDS.indexOf(prev) + 1) % WORDS.length])
        setIsFading(false)
      }, 300)
    }

    const timeout = setTimeout(() => {
      const interval = setInterval(cycleWords, 3000)
      return () => clearInterval(interval)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault()
      const target = document.querySelector(e.currentTarget.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <>
      <Header currentWord={currentWord} isFading={isFading} />
      <main>
        <HeroBento />
      </main>
      <Footer />
    </>
  )
}

export default App
