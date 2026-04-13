import Card from './Card'
import Badge from './Badge'
import { MapPin, Star, ArrowRight, Sparkles } from 'lucide-react'

export default function HospitalCard({ hospital }) {
  return (
    <Card className={`p-6 ${hospital.topMatch ? 'border-[#c46d5a]' : ''}`}>
      {hospital.topMatch ? (
        <div className="-mt-2 mb-4">
          <Badge variant="accent">
            <Sparkles size={16} className="mr-2" />
            Top Match
          </Badge>
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">{hospital.name}</h3>
          <div className="mt-3 flex items-center gap-2 text-[#9c887d] text-lg">
            <MapPin size={18} />
            <span>{hospital.distance}</span>
          </div>
        </div>
        <Badge variant="success">{hospital.fit}</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Badge>
          <Star size={16} className="mr-2" />
          {hospital.trustScore} Trust Score
        </Badge>
        <Badge variant="accent">{hospital.pmjay}</Badge>
      </div>

      <div className="mt-6 rounded-[24px] bg-[#f3ece4] p-6 flex items-center justify-between">
        <div>
          <div className="inline-flex rounded-full border border-[#e1cdbf] bg-[#fcfaf7] px-5 py-2 text-lg text-[#a08b80]">
            Total Estimated Cost
          </div>
          <div className="mt-5 text-4xl font-semibold">{hospital.cost}</div>
        </div>
        <button className={`h-24 w-24 rounded-full flex items-center justify-center ${hospital.topMatch ? 'bg-[#c46d5a] text-white' : 'bg-[#f6ede3] text-[#5d433d]'}`}>
          <ArrowRight size={34} />
        </button>
      </div>
    </Card>
  )
}