import React from 'react'
import Landing from './mycomponents/Landing'
import Navbar from './mycomponents/Navbar'
import Marque from './mycomponents/Marque'
import About from './mycomponents/About'
import Eyes from './mycomponents/Eyes'
import Featured from './mycomponents/Featured'
import LocomotiveScroll from 'locomotive-scroll'
function App() {
  const locomotivescroll=new LocomotiveScroll()
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featured/>
    </div>
  )
}

export default App