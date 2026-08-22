'use client'

import { useState } from 'react'

interface PreviewField {
  id: string
  type: string
  label: string
  placeholder: string
  required: boolean
}

export default function PreviewPage() {
  const [fields] = useState<PreviewField[]>([
    { id: '1', type: 'text', label: 'Full Name', placeholder: 'John Doe', required: true },
    { id: '2', type: 'email', label: 'Email Address', placeholder: 'john@example.com', required: true },
    { id: '3', type: 'select', label: 'Company Size', placeholder: '', required: false },
  ])

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Lead Qualification Form</h1>
        <p className="text-slate-500 mb-8">Help us understand your needs better.</p>

        <form className="space-y-6">
          {fields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {field.type === 'text' && (
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
              {field.type === 'email' && (
                <input
                  type="email"
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
              {field.type === 'select' && (
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>200+ employees</option>
                </select>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
