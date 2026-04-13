export default function StepRail() {
  return (
    <div className="absolute left-8 top-0 bottom-0 hidden md:block">
      <div className="relative h-full">
        <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-[#e6d8cc]" />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-0 h-6 w-6 rounded-full border-4 border-[#f7f1eb] bg-[#c46d5a]"
            style={{ top: `${i * 33}%` }}
          />
        ))}
      </div>
    </div>
  )
}