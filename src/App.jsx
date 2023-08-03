import './App.css'

function App() {

  return ( 
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%] '>
      
      {/* Left Column */}
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-screen'>

          {/* Title */}
          <div>
            <div>Polakrit Chulanutrakul</div>
            <div>Front-End Developer - open to work</div>
            <div>Empowering Brands, Enchanting Customers</div>
            <div>View Resume</div>
          </div>

          {/* Navigation */}
          <div>Nav</div>

          {/* Link */}
          <div className='flex items-end'>Link</div>

        </div>
      </div>

      {/* Right Column */}
      <div>

        {/* About */}
        <div>About</div>

        {/* Experiences */}
        <div className='mb-96'>Experiences</div>
        <div className='mb-96'>Experiences</div>
        <div className='mb-96'>Experiences</div>

      </div>
    </div>
  )
}

export default App
