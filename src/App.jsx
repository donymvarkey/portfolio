import Navbar from "./components/navbar"
import UnderConstruction from "./components/under-construction"

function App() {

  return (
    <div className='bg-black w-screen h-screen'>
      <div className="flex justify-center">
        <div className='container mx-auto py-4'>
          <Navbar />
          <div>
            <UnderConstruction />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
