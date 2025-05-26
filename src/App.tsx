import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold !text-red-800 mb-4">
          Vite + React + TypeScript + TailwindCSS
        </h1>
        <p className="text-gray-600">
          Edit <code className="bg-gray-100 p-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
