import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Card from '../components/Card'
import QuoteBox from '../components/QuoteBox'
import CarePathTimeline from '../components/CarePathTimeline'
import Badge from '../components/Badge'
import { patientCase } from '../data/patientCase'

export default function AnalysisPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f7f1eb]">
      <div className="mx-auto max-w-md px-6 pb-10">
        <Header title="JeevanMitra" showBack />

        <div className="mt-8">
          <h2 className="text-6xl font-semibold leading-[1.05]">AI Understands Your Need</h2>
          <div className="mt-8">
            <QuoteBox text={patientCase.query} />
          </div>
        </div>

        <Card className="mt-8 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-4xl font-semibold leading-tight">Care Summary</div>
            </div>
            <Badge variant="success">Confidence</Badge>
          </div>

          <div className="my-6 h-px bg-[#ead9cd]" />

          <div className="text-xl text-[#9a877d]">Possible Condition</div>
          <div className="mt-2 text-2xl font-semibold leading-tight">{patientCase.condition}</div>

          <div className="mt-8 text-xl text-[#9a877d]">Recommended Specialty</div>
          <div className="mt-2 text-2xl font-semibold">{patientCase.specialty}</div>
        </Card>

        <Card className="mt-8 p-6">
          <div className="text-4xl font-semibold leading-tight">Suggested Care Path</div>
          <div className="my-6 h-px bg-[#ead9cd]" />
          <CarePathTimeline items={patientCase.carePath} />
        </Card>

        <button
          onClick={() => navigate('/hospitals')}
          className="mt-10 w-full rounded-full bg-[#c46d5a] px-8 py-6 text-2xl font-semibold text-white"
        >
          Find Hospitals Nearby →
        </button>
      </div>
    </div>
  )
}