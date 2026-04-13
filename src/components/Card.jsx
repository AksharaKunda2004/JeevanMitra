export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-[28px] border border-[#ead9cd] bg-[#fcfaf7] ${className}`}>
      {children}
    </div>
  )
}