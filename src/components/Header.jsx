import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header({ title, showBack = false, rightSlot = null }) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-6 pt-8 pb-4">
      <div className="w-16">
        {showBack ? (
          <button
            onClick={() => navigate(-1)}
            className="h-14 w-14 rounded-3xl border border-[#e6d6ca] bg-[#fbf6f0] flex items-center justify-center"
          >
            <ChevronLeft size={28} />
          </button>
        ) : null}
      </div>

      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="w-16 flex justify-end">{rightSlot}</div>
    </div>
  )
}