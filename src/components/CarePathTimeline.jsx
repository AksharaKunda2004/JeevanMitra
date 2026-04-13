export default function CarePathTimeline({ items }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[10px] top-4 bottom-4 w-[2px] bg-[#ead9cd]" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <div
              className={`absolute -left-0 top-1 h-5 w-5 rounded-full border-2 ${
                item.active ? 'bg-[#c46d5a] border-[#c46d5a]' : 'bg-[#fcfaf7] border-[#e0cfc3]'
              }`}
            />
            <div className="pl-10">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-lg leading-8 text-[#9c887d]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}