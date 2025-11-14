import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { vfu } from '../data/user'

import Profilelogo from '../assets/img/mixhtml.png'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    const result = vfu(username, password)

    if (result) {
      localStorage.setItem('token', result.token)
      localStorage.setItem('role', result.role)
      localStorage.setItem('isLoggedIn', 'true')

      navigate('/multipage')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900">
      <div className="p-8 bg-zinc-800 rounded-2xl shadow-2xl shadow-zinc-950/50 w-96 border border-zinc-700">
        <div>
          <img src={Profilelogo} 
          className='max-w-[250px] mx-auto mb-5' 
          alt="Logohtmlcss" />
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative group">
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 text-zinc-100 placeholder-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
              required
            />
            <div className="absolute right-2 top-[38px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900 text-zinc-100 text-xs px-3 py-2 rounded-lg border border-zinc-600 shadow-lg whitespace-nowrap pointer-events-none z-10">
              Try: <span className="font-semibold text-green-400">user</span>
            </div>
          </div>
          <div className="relative group">
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 text-zinc-100 placeholder-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
              required
            />
            <div className="absolute right-2 top-[38px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900 text-zinc-100 text-xs px-3 py-2 rounded-lg border border-zinc-600 shadow-lg whitespace-nowrap pointer-events-none z-10">
              Try: <span className="font-semibold text-green-400">123</span>
            </div>
          </div>
          {error && (
            <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          <button 
            type="submit"
            className="w-full mt-5 py-3 cursor-pointer bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-zinc-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login