import './App.css'
import { perfumeData } from './data/perfumeMock'
import Header from './components/Header'
import TopMatch from './components/TopMatch'

function App() {
  

  return (
    <>
      <Header />
      <main className='max-w-[1126px] mx-auto px-4 py-8'>
        <TopMatch data={perfumeData}  />
      </main>
    </>
  )
}

export default App
