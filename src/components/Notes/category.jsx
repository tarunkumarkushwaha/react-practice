import React from 'react';
import { AppCategories } from './questionsData'; // Ensure path matches your file location

export default function CategoryNavigator() {
  return (
    <div className="p-4 bg-slate-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Interview Playbook Categories</h1>
      
      {AppCategories.map((category) => (
        <div key={category.id} className="mb-6 p-4 border border-slate-700 rounded-lg">
          <h2 className="text-xl font-semibold text-teal-400">{category.title}</h2>
          <p className="text-sm text-slate-400 mb-3">{category.description}</p>
          <span className="text-xs text-slate-500 font-mono">
            Total Questions: {category.questions.length}
          </span>
        </div>
      ))}
    </div>
  );
}