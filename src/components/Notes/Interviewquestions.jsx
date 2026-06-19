// PlaybookDashboard.js
import React, { useState } from 'react';
import { AppCategories } from './questionsData'; // Safely points to our new file asset!

export default function PlaybookDashboard() {
  const [selectedCategory, setSelectedCategory] = useState(AppCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedAnswers, setRevealedAnswers] = useState({});

  // Locate the active runtime category context
  const activeCategory = AppCategories.find(cat => cat.id === selectedCategory) || AppCategories[0];

  // Filter out items based on the search query
  const filteredQuestions = activeCategory.questions.filter(q =>
    q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Compute metrics
  const totalQuestionsInPlaybook = AppCategories.reduce((acc, cat) => acc + cat.questions.length, 0);

  const toggleAnswerVisibility = (id) => {
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-900">
      
      {/* Top Application Bar */}
      <header className="border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold bg-linear-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Interview Master Playbook
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            updated 20 june 2026
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-mono">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-slate-400">Total Playbook Entries:</span>
          <span className="text-teal-400 font-bold">{totalQuestionsInPlaybook}</span>
        </div>
      </header>

      {/* Main Workspace Frame Layout */}
      <div className="max-w-[1700px] mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Nav Tree Container */}
        <aside className="lg:col-span-4 flex flex-col gap-3">
          <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase px-2 font-mono">
            Navigation Index
          </h3>
          <div className="space-y-2.5">
            {AppCategories.map((category) => {
              const isActive = category.id === selectedCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSearchQuery('');
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-br from-slate-950 to-slate-900 border-teal-500/50 shadow-lg'
                      : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-900/80 hover:border-slate-700/60'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-teal-400 to-emerald-500" />
                  )}
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h4 className={`font-semibold text-sm transition-colors ${isActive ? 'text-teal-400' : 'text-slate-300 group-hover:text-slate-100'}`}>
                      {category.title}
                    </h4>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${isActive ? 'bg-teal-950 text-teal-300 border border-teal-800/40' : 'bg-slate-950 text-slate-500'}`}>
                      {category.questions.length}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Dynamic Focus Desk Workspace */}
        <main className="lg:col-span-8 bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col shadow-inner">
          
          {/* Active Category Meta Headers */}
          <div className="border-b border-slate-800 pb-5 mb-6">
            <span className="text-xs font-mono text-teal-400 bg-teal-950/40 px-2.5 py-1 rounded-md border border-teal-900/50 uppercase tracking-wider">
              Selected Scope
            </span>
            <h2 className="text-2xl font-bold text-slate-100 mt-3">{activeCategory.title}</h2>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{activeCategory.description}</p>
            
            {/* Realtime Search Query Filtering Element */}
            <div className="mt-5 relative">
              <input
                type="text"
                placeholder={`Search code text or questions inside this module...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Core Dynamic Content Stack */}
          <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question, index) => {
                const isRevealed = !!revealedAnswers[question.id];
                return (
                  <div 
                    key={question.id}
                    className="bg-slate-900/30 border border-slate-800/60 rounded-xl transition-all duration-200 overflow-hidden"
                  >
                    {/* Collapsible Trigger Title Header */}
                    <div 
                      onClick={() => toggleAnswerVisibility(question.id)}
                      className="p-4 flex items-start gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors select-none"
                    >
                      <div className="font-mono text-xs font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-900 min-w-[40px] text-center">
                        #{index + 1}
                      </div>
                      <div className="flex-1 text-sm font-medium text-slate-200 pt-0.5 leading-relaxed">
                        {question.text}
                      </div>
                      {/* <button className="text-xs font-mono text-teal-400 bg-slate-900 px-2 py-1 rounded border border-slate-800 hover:border-teal-500/40 transition-colors">
                        {isRevealed ? 'HIDE' : 'VIEW ANSWER'}
                      </button> */}
                    </div>

                    {/* Expandable Technical Documentation Block */}
                    {isRevealed && (
                      <div className="border-t border-slate-800/80 bg-slate-950/70 p-5 font-sans text-sm text-slate-300 leading-relaxed">
                        <div className="whitespace-pre-wrap font-sans text-slate-300">
                          {question.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl bg-slate-900/10">
                <p className="text-sm text-slate-500 font-mono">
                  No records matched search string constraint "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs text-teal-400 hover:underline font-medium"
                >
                  Reset text pipeline filters
                </button>
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}