
import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [memes, setMemes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchMemes() {
      try {
        setLoading(true)
        const res = await fetch('https://api.imgflip.com/get_memes', {
          signal: controller.signal,
        })
        const data = await res.json()
        if (data?.success && data?.data?.memes) {
          setMemes(data.data.memes)
        } else {
          throw new Error('Failed to load memes')
        }
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Error')
      } finally {
        setLoading(false)
      }
    }
    fetchMemes()
    return () => controller.abort()
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return memes
    return memes.filter((m) => m.name.toLowerCase().includes(q))
  }, [query, memes])

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
     <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b py-4">
  
  {/* BIG BOLD HEADING */}
  <h1 className="text-5xl font-extrabold tracking-tight text-center mb-4">
  Meme Template Viewer
</h1>

  {/* FULL-WIDTH SEARCH BAR */}
  <div className="w-full">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search memes..."
      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg 
                 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
    />
  </div>

</header>


      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        
        {loading && <p className="text-center text-gray-600">Loading memes...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-4 gap-5">

            {filtered.map((meme) => (
              <a
                key={meme.id}
                href={meme.url}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {/* FULL CARD WRAPPER (Image + Title inside same card) */}
                <div className="rounded-2xl border border-gray-300 bg-white shadow-md 
                                hover:shadow-lg transition-shadow overflow-hidden 
                                flex flex-col justify-between h-[360px] p-4">

                  {/* IMAGE */}
                  <div className="flex items-center justify-center w-full h-[250px] bg-gray-100 overflow-hidden">
                    <img
                      src={meme.url}
                      alt={meme.name}
                      className="max-h-full max-w-full object-contain object-center 
                                 transition-transform group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>

                  {/* TITLE */}
                  <p className="text-[15px] font-semibold text-gray-800 text-center mt-3">
                    {meme.name}
                  </p>

                </div>
              </a>
            ))}

          </div>
        )}
      </main>

    </div>
  )
}

export default App
