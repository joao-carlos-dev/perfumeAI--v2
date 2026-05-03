import './App.css'
import Header from './components/Header'
import TopMatch from './components/TopMatch'

function App() {
  

  return (
    <>
      <Header />
      <main className='max-w-[1126px] mx-auto px-4 py-8'>
        <TopMatch />
      </main>
    </>
  )
}

export default App
