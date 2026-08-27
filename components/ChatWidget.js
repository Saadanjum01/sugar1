'use client'

import { useState, useRef, useEffect } from 'react'

// Supabase Edge Function (Deno, serverless) -- no persistent server to run
// alongside the Vercel deployment. See supabase/functions/sugar-chat.
const FUNCTION_URL = process.env.NEXT_PUBLIC_SUPABASE_FUNCTION_URL
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const GREETING = {
  role: 'assistant',
  text: "Hi! Ask me about hours, services, insurance, or booking at First Colony Vision.",
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  async function sendMessage(e) {
    e.preventDefault()
    const question = input.trim()
    if (!question || loading) return

    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ANON_KEY}`,
          apikey: ANON_KEY,
        },
        body: JSON.stringify({ question }),
      })

      const data = await res.json()
      if (!res.ok || !data.answer) throw new Error(data.error || `Request failed (${res.status})`)

      setMessages((prev) => [...prev, { role: 'assistant', text: data.answer }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "Sorry, I couldn't reach the assistant right now. Please call us at 281-916-2020.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-8 right-32 sm:right-36 z-50 w-16 h-16 rounded-full bg-[#1E2749] text-white shadow-2xl hover:bg-[#B33951] transition-all flex items-center justify-center"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 sm:right-10 z-50 w-[92vw] max-w-sm h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#1E2749]/10">
          <div className="bg-[#1E2749] text-white px-5 py-4">
            <div className="font-bold text-sm">First Colony Vision</div>
            <div className="text-[#C0C3CC] text-xs">Ask us anything</div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F6F6F8]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#1E2749] text-white rounded-br-sm'
                      : 'bg-white text-[#33415C] rounded-bl-sm shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E2749]/40 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E2749]/40 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E2749]/40 animate-bounce" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="p-3 border-t border-[#1E2749]/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 px-4 py-2.5 rounded-full border border-[#1E2749]/15 text-sm text-[#1E2749] focus:outline-none focus:border-[#B33951]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-full bg-[#B33951] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#1E2749] transition-colors flex-shrink-0"
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
