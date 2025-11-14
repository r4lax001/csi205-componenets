import React from 'react'
import { useOutletContext } from 'react-router-dom'  // ✅ เพิ่มบรรทัดนี้
import Profile from '../assets/img/Animation-image/Human.png'

function Home() {
    const { product, carts, setCarts } = useOutletContext()

    return (
        <div className="py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 border-2 border-zinc-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-8">
                    
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-zinc-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-zinc-400/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            
                            {/* Profile Image */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                                    <img 
                                        src={Profile} 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900"></div>
                            </div>
                            
                            {/* Profile Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-4xl font-medium text-slate-100 mb-2">
                                    67131555 ปัฐวัติ แสนคำเพิงใจ
                                </h1>
                                <p className="text-xl text-slate-400 mb-4">Front-End Developer Student</p>
                                
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600">React</span>
                                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600">JavaScript</span>
                                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600">Tailwind CSS</span>
                                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600">HTML/CSS</span>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <span className="text-purple-400">📧</span>
                                        <span className="text-sm">pattawat.sae@spumail.net</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-purple-400">🎓</span>
                                        <span className="text-sm">Computer Science</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-purple-400">📍</span>
                                        <span className="text-sm">Bangkok</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    
                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 border-2 border-zinc-500 rounded-2xl p-6 shadow-xl hover:border-zinc-200 transition-all duration-300 group">
                        <div className="text-center">
                            <div className="text-4xl mb-2">💻</div>
                            <div className="text-3xl font-bold text-slate-200 mb-1">6</div>
                            <div className="text-slate-400 text-sm">Projects Completed</div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 border-2 border-zinc-500 rounded-2xl p-6 shadow-xl hover:border-zinc-200 transition-all duration-300 group">
                        <div className="text-center">
                            <div className="text-4xl mb-2">🎯</div>
                            <div className="text-3xl font-bold text-slate-200 mb-1">CSI205 L</div>
                            <div className="text-slate-400 text-sm">Current Course</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home