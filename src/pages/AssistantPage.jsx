import { Mic, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Badge from '../components/Badge'
import StepRail from '../components/StepRail'
import { patientCase } from '../data/patientCase'

export default function AssistantPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f7f1eb]">
      <div className="mx-auto max-w-md border-x border-transparent">
        <div className="flex items-center justify-between px-6 pt-8 pb-6">
          <div className="text-2xl font-semibold">{patientCase.appName}</div>
          <button className="rounded-3xl bg-[#f1e8df] px-5 py-4 flex items-center gap-2 text-xl">
            {patientCase.language}
            <ChevronDown size={22} />
          </button>
        </div>

        <div className="border-t border-[#e6d6ca]" />

        <div className="relative px-6 py-8">
          <StepRail />

          <section className="ml-10">
            <h2 className="text-3xl font-semibold mb-5">Describe Symptoms</h2>
            <Card className="p-6">
              <div className="rounded-[24px] bg-[#f1e9e2] p-8 italic text-[22px] leading-10 text-[#4f3b36]">
                “{patientCase.query}”
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <button className="h-24 w-24 rounded-full bg-[#efe5d9] flex items-center justify-center text-[#c46d5a]">
                  <Mic size={36} />
                </button>
                <button
                  onClick={() => navigate('/analysis')}
                  className="rounded-full bg-[#c46d5a] px-10 py-6 text-2xl font-semibold text-white"
                >
                  Find Care →
                </button>
              </div>
            </Card>
          </section>

          <section className="ml-10 mt-10">
            <h2 className="text-3xl font-semibold mb-5">AI Understands Your Need</h2>
            <Card className="p-6">
              <div className="flex gap-3 flex-wrap">
                <Badge variant="success">{patientCase.confidenceLabel}</Badge>
                <Badge>{patientCase.specialty}</Badge>
              </div>

              <div className="mt-6 text-xl text-[#9a877d]">Suggested Care Path</div>

              <div className="mt-4 rounded-[24px] bg-[#f1e9e2] p-8 flex items-center justify-between">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-white" />
                  <div className="mt-4 text-2xl font-medium">Consultation</div>
                </div>
                <div className="text-4xl text-[#9a877d]">→</div>
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-white" />
                  <div className="mt-4 text-2xl font-medium">Angioplasty</div>
                </div>
              </div>
            </Card>
          </section>

          <section className="ml-10 mt-10">
            <h2 className="text-3xl font-semibold mb-5">Find Hospitals</h2>
            <div className="space-y-5">
              {[
                { name: 'ABC Heart Institute', distance: '5.2 km away', rating: '4.8' },
                { name: 'City Care Hospital', distance: '7.1 km away', rating: '4.6' },
              ].map((item, i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-semibold">{item.name}</div>
                      <div className="mt-5 text-lg text-[#9a877d]">{item.distance}</div>
                    </div>
                    <Badge>{item.rating}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}