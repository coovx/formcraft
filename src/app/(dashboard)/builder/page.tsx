'use client'

import { useState } from 'react'
import { Block, BlockType } from '@/types'

const BLOCK_TYPES: { type: BlockType; label: string; icon: string }[] = [
  { type: 'text', label: 'Text Input', icon: 'T' },
  { type: 'number', label: 'Number', icon: '123' },
  { type: 'email', label: 'Email', icon: '@' },
  { type: 'select', label: 'Dropdown', icon: 'v' },
  { type: 'radio', label: 'Radio', icon: 'O' },
  { type: 'checkbox', label: 'Checkbox', icon: 'X' },
  { type: 'textarea', label: 'Paragraph', icon: 'P' },
  { type: 'date', label: 'Date', icon: 'D' },
]

export default function BuilderPage() {
  const [blocks, setBlocks] = useState<Block[]>([])
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)

  const addBlock = (type: BlockType) => {
    const newBlock: Block = {
      id: crypto.randomUUID(),
      tool_id: 'demo',
      type,
      label: `New ${type} field`,
      properties: { placeholder: '', required: false },
      order_index: blocks.length,
      parent_id: null,
      created_at: new Date().toISOString(),
    }
    setBlocks([...blocks, newBlock])
  }

  const updateBlock = (id: string, updates: Partial<Block>) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, ...updates } : b))
  }

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id))
    if (selectedBlock === id) setSelectedBlock(null)
  }

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const newBlocks = [...blocks]
      ;[newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]]
      setBlocks(newBlocks.map((b, i) => ({ ...b, order_index: i })))
    }
    if (direction === 'down' && index < blocks.length - 1) {
      const newBlocks = [...blocks]
      ;[newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]]
      setBlocks(newBlocks.map((b, i) => ({ ...b, order_index: i })))
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
            <span className="text-xl font-bold text-slate-800">FormCraft Builder</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-slate-600 hover:text-slate-900 px-4 py-2">Preview</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
              Publish
            </button>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-64px)]">
        <div className="w-64 bg-white border-r border-slate-200 p-4 overflow-y-auto">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Add Fields</h3>
          <div className="space-y-2">
            {BLOCK_TYPES.map((bt) => (
              <button
                key={bt.type}
                onClick={() => addBlock(bt.type)}
                className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition text-left"
              >
                <span className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-600 font-bold text-sm">
                  {bt.icon}
                </span>
                <span className="text-slate-700 font-medium">{bt.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {blocks.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <div className="text-6xl mb-4">+</div>
                <p className="text-lg">Click a field type from the sidebar to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {blocks.map((block, index) => (
                  <div
                    key={block.id}
                    onClick={() => setSelectedBlock(block.id)}
                    className={`bg-white p-4 rounded-xl border-2 transition ${
                      selectedBlock === block.id
                        ? 'border-indigo-500 shadow-md'
                        : 'border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">{block.type}</span>
                        <span className="text-slate-800 font-medium">{block.label}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => { e.stopPropagation(); moveBlock(index, 'up') }}
                          disabled={index === 0}
                          className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30"
                        >↑</button>
                        <button
                          onClick={(e) => { e.stopPropagation(); moveBlock(index, 'down') }}
                          disabled={index === blocks.length - 1}
                          className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30"
                        >↓</button>
                        <button
                          onClick={(e) => { e.stopPropagation(); removeBlock(block.id) }}
                          className="p-1 text-red-400 hover:text-red-600"
                        >×</button>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg">
                      {block.type === 'text' && (
                        <input
                          type="text"
                          placeholder={block.properties.placeholder as string || 'Enter text...'}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                          disabled
                        />
                      )}
                      {block.type === 'number' && (
                        <input
                          type="number"
                          placeholder={block.properties.placeholder as string || '0'}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                          disabled
                        />
                      )}
                      {block.type === 'email' && (
                        <input
                          type="email"
                          placeholder={block.properties.placeholder as string || 'email@example.com'}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                          disabled
                        />
                      )}
                      {block.type === 'textarea' && (
                        <textarea
                          placeholder={block.properties.placeholder as string || 'Enter your message...'}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white h-24"
                          disabled
                        />
                      )}
                      {block.type === 'select' && (
                        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white" disabled>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      )}
                      {block.type === 'radio' && (
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="radio" disabled className="w-4 h-4" />
                            <span className="text-slate-600">Option 1</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" disabled className="w-4 h-4" />
                            <span className="text-slate-600">Option 2</span>
                          </label>
                        </div>
                      )}
                      {block.type === 'checkbox' && (
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" disabled className="w-4 h-4" />
                            <span className="text-slate-600">Option 1</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" disabled className="w-4 h-4" />
                            <span className="text-slate-600">Option 2</span>
                          </label>
                        </div>
                      )}
                      {block.type === 'date' && (
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                          disabled
                        />
                      )}
                    </div>

                    {selectedBlock === block.id && (
                      <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase">Label</label>
                            <input
                              type="text"
                              value={block.label as string}
                              onChange={(e) => updateBlock(block.id, { label: e.target.value })}
                              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg bg-white"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase">Placeholder</label>
                            <input
                              type="text"
                              value={block.properties.placeholder as string || ''}
                              onChange={(e) => updateBlock(block.id, {
                                properties: { ...block.properties, placeholder: e.target.value }
                              })}
                              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg bg-white"
                            />
                          </div>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={block.properties.required as boolean || false}
                              onChange={(e) => updateBlock(block.id, {
                                properties: { ...block.properties, required: e.target.checked }
                              })}
                              className="w-4 h-4"
                            />
                            <span className="text-sm text-slate-700">Required field</span>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
