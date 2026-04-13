export default function QuoteBox({ text }) {
  return (
    <div className="rounded-[24px] bg-[#f1e9e2] px-6 py-6 border-l-4 border-[#c46d5a] text-[#8f7b70] italic text-xl leading-10">
      “{text}”
    </div>
  )
}