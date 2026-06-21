import './App.css'
import Profile from './components/Profile.jsx'
import SocialIcons from './components/SocailIcons.jsx'
import Skills from './components/Skills.jsx'
import Works from './components/Works.jsx'

function App() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full py-8 lg:py-16">
          <div className="w-full lg:w-[60%]">
            <Profile />
          </div>
          <div className="w-full lg:w-[40%] flex justify-center items-center">
            <SocialIcons />
          </div>
        </div>
      </div>
      <Skills />
      <Works />
    </>
  )
}

export default App
