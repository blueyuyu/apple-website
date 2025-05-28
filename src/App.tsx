import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import { Highlight } from './components/highlight';
import { CloserLook } from './components/closerLook';
import { Story } from './components/story';
import { VideoShow } from './components/videoShow';
import { Footer } from './components/footer';


function App() {
  return (
    <main className="bg-[#000000]">
      <Navbar />
      <Hero />
      <Highlight />
      <CloserLook />
      <Story />
      <VideoShow />
      <Footer />
    </main>
  )
}

export default App
