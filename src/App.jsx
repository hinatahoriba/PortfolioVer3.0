import './App.css'
import Profile from './components/Profile.jsx'
import SocialIcons from './components/SocailIcons.jsx'
import Skills from './components/Skills.jsx'
import Works from './components/Works.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-20">
      {/* 💡 ここで全体の「最大幅(max-w)」と「左右中央寄せ(mx-auto)」を一括制御します */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-10 md:space-y-16">
        <Profile />
        <SocialIcons />
        <Skills />
        <Works />
      </div>
    </div>
  )
}

export default App
