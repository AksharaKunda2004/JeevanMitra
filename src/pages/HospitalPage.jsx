import Header from '../components/Header'
import HospitalCard from '../components/HospitalCard'
import { hospitals } from '../data/hospitals'

export default function HospitalsPage() {
  return (
    <div className="min-h-screen bg-[#f7f1eb]">
      <div className="mx-auto max-w-md px-6 pb-12">
        <Header
          title="Find Hospitals"
          showBack
          rightSlot={<div className="h-14 w-14 rounded-3xl border border-[#e6d6ca] bg-[#fbf6f0]" />}
        />

        <div className="mt-4 flex justify-center gap-3">
          <span className="h-5 w-5 rounded-full bg-[#e7d8cb]" />
          <span className="h-5 w-5 rounded-full bg-[#e7d8cb]" />
          <span className="h-5 w-20 rounded-full bg-[#c46d5a]" />
          <span className="h-5 w-5 rounded-full bg-[#e7d8cb]" />
          <span className="h-5 w-5 rounded-full bg-[#e7d8cb]" />
        </div>

        <div className="mt-8 rounded-full bg-[#efe5d9] px-6 py-5 text-xl leading-8">
          Nagpur resident feels chest pain while walking and wants affordable care.
        </div>

        <div className="mt-8">
          <h2 className="text-6xl font-semibold leading-none">Nearby Hospitals</h2>
          <p className="mt-4 text-2xl leading-10 text-[#a08e84]">
            A quick comparison of fit, trust, PM-JAY support, and total estimated cost.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>

        <p className="mt-12 text-center text-xl text-[#a08e84]">
          Decision support only, not medical advice.
        </p>
      </div>
    </div>
  )
}