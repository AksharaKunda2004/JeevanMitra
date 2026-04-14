import { useState } from 'react'
import './index.css'

export default function App() {
  const [screen, setScreen] = useState('assistant')
  const [symptoms, setSymptoms] = useState(
    'I feel chest pain while walking and I want a nearby affordable hospital.'
  )

  const [recommendedHospital, setRecommendedHospital] = useState({
    name: 'ABC Heart Institute',
    reason:
      'Best match for cardiology, nearby location, PM-JAY support, and lower estimated cost.',
    fit: '95% Fit',
    cost: '₹1.8L – ₹3.0L',
    distance: '5.2 km away',
    trust: '4.8 Trust Score',
    support: '₹1.2L covered',
    payable: '₹60K – ₹1.8L',
    emi: 'From ₹5,400/month',
  })

  const selectABC = () => {
    setRecommendedHospital({
      name: 'ABC Heart Institute',
      reason:
        'Best match for cardiology, nearby location, PM-JAY support, and lower estimated cost.',
      fit: '95% Fit',
      cost: '₹1.8L – ₹3.0L',
      distance: '5.2 km away',
      trust: '4.8 Trust Score',
      support: '₹1.2L covered',
      payable: '₹60K – ₹1.8L',
      emi: 'From ₹5,400/month',
    })
  }

  const selectCityCare = () => {
    setRecommendedHospital({
      name: 'City Care Hospital',
      reason:
        'Good cardiology fit with PM-JAY support, but slightly farther and slightly higher estimated cost.',
      fit: '90% Fit',
      cost: '₹2.0L – ₹3.4L',
      distance: '7.1 km away',
      trust: '4.6 Trust Score',
      support: '₹1.0L covered',
      payable: '₹1.0L – ₹2.4L',
      emi: 'From ₹7,200/month',
    })
  }

  const assistantScreen = (
    <div className="page">
      <div className="topbar">
        <h1 className="brand">JeevanMitra</h1>
        <button className="soft-btn">EN</button>
      </div>

      <h2 className="section-title">Describe Symptoms</h2>

      <div className="panel">
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms here..."
          rows={6}
          className="symptom-box"
        />

        <div className="action-row">
          <button className="icon-btn">🎤</button>

          <button
            onClick={() => setScreen('analysis')}
            className="primary-btn"
          >
            Find Care →
          </button>
        </div>
      </div>

      <div className="panel">
        <p className="muted-label">Current symptom input</p>
        <p className="live-text">{symptoms}</p>
      </div>

      <div className="panel">
        <p className="muted-label">Quick examples</p>
        <div className="chip-row">
          <button
            className="chip-btn"
            onClick={() =>
              setSymptoms('I feel chest pain while walking and I want a nearby affordable hospital.')
            }
          >
            Chest pain
          </button>

          <button
            className="chip-btn"
            onClick={() =>
              setSymptoms('I have severe headache and dizziness and need urgent consultation.')
            }
          >
            Headache
          </button>

          <button
            className="chip-btn"
            onClick={() =>
              setSymptoms('I need low-cost surgery options with insurance support near me.')
            }
          >
            Low-cost surgery
          </button>
        </div>
      </div>
    </div>
  )

  const analysisScreen = (
    <div className="page">
      <button onClick={() => setScreen('assistant')} className="back-btn">
        ←
      </button>

      <h1 className="center-title">AI Understands Your Need</h1>

      <div className="quote-box">“{symptoms}”</div>

      <div className="panel">
        <div className="panel-top">
          <h3 className="panel-title">Care Summary</h3>
          <span className="green-chip">High Confidence</span>
        </div>

        <hr className="divider" />

        <div className="field-label">Possible Condition</div>
        <div className="field-value">Stable Angina / Cardiac Ischemia</div>

        <div className="field-label">Recommended Specialty</div>
        <div className="field-value">Cardiology</div>
      </div>

      <div className="panel">
        <h3 className="panel-title">Suggested Care Path</h3>
        <hr className="divider" />

        <div className="care-step">
          <div className="step-title">Cardiology Consultation</div>
          <div className="step-desc">
            Initial evaluation by a specialist to assess symptoms and heart function.
          </div>
        </div>

        <div className="care-step">
          <div className="step-title">Diagnostic Evaluation</div>
          <div className="step-desc">
            ECG, imaging, or tests to confirm severity and next treatment path.
          </div>
        </div>

        <div className="care-step">
          <div className="step-title">Angioplasty Evaluation</div>
          <div className="step-desc">
            Treatment planning if a procedure is required.
          </div>
        </div>
      </div>

      <button
        onClick={() => setScreen('hospitals')}
        className="primary-btn full-btn"
      >
        Find Hospitals Nearby →
      </button>
    </div>
  )

  const hospitalsScreen = (
    <div className="page">
      <button onClick={() => setScreen('analysis')} className="back-btn">
        ←
      </button>

      <h1 className="center-title">Find Hospitals</h1>

      <div className="search-pill">
        Nearby affordable options for cardiac care with scheme support.
      </div>

      <div className="recommend-card">
        <div className="recommend-badge">Recommended for You</div>
        <h3 className="recommend-title">{recommendedHospital.name}</h3>
        <p className="recommend-reason">{recommendedHospital.reason}</p>

        <div className="chip-row">
          <span className="green-chip">{recommendedHospital.fit}</span>
          <span className="soft-chip">{recommendedHospital.cost}</span>
          <span className="soft-chip">{recommendedHospital.distance}</span>
        </div>
      </div>

      <h2 className="big-title">Nearby Hospitals</h2>
      <p className="subtext">
        A quick comparison of fit, trust, PM-JAY support, and estimated cost.
      </p>

      <div
        onClick={selectABC}
        className={`hospital-card ${
          recommendedHospital.name === 'ABC Heart Institute' ? 'hospital-card-active' : ''
        }`}
      >
        <div className="top-match-badge">Top Match</div>

        <div className="row-between">
          <div>
            <div className="hospital-name">ABC Heart Institute</div>
            <div className="hospital-sub">5.2 km away</div>
          </div>
          <span className="green-chip">95% Fit</span>
        </div>

        <div className="chip-row space-top">
          <span className="soft-chip">4.8 Trust Score</span>
          <span className="accent-chip">PM-JAY Supported</span>
        </div>

        <div className="cost-box">
          <div>
            <div className="cost-label">Total Estimated Cost</div>
            <div className="cost-value">₹1.8L – ₹3.0L</div>
          </div>
          <button
            className="round-action-btn"
            onClick={(e) => {
              e.stopPropagation()
              selectABC()
              setScreen('costs')
            }}
          >
            →
          </button>
        </div>
      </div>

      <div
        onClick={selectCityCare}
        className={`hospital-card ${
          recommendedHospital.name === 'City Care Hospital' ? 'hospital-card-active' : ''
        }`}
      >
        <div className="row-between">
          <div>
            <div className="hospital-name">City Care Hospital</div>
            <div className="hospital-sub">7.1 km away</div>
          </div>
          <span className="green-chip">90% Fit</span>
        </div>

        <div className="chip-row space-top">
          <span className="soft-chip">4.6 Trust Score</span>
          <span className="accent-chip">PM-JAY Supported</span>
        </div>

        <div className="cost-box">
          <div>
            <div className="cost-label">Total Estimated Cost</div>
            <div className="cost-value">₹2.0L – ₹3.4L</div>
          </div>
          <button
            className="round-soft-btn"
            onClick={(e) => {
              e.stopPropagation()
              selectCityCare()
              setScreen('costs')
            }}
          >
            →
          </button>
        </div>
      </div>

      <p className="footer-note">Decision support only, not medical advice.</p>
    </div>
  )

  const costScreen = (
    <div className="page">
      <button onClick={() => setScreen('hospitals')} className="back-btn">
        ←
      </button>

      <h1 className="center-title">Cost & Support</h1>

      <div className="recommend-card">
        <div className="recommend-badge">Selected Hospital</div>
        <h3 className="recommend-title">{recommendedHospital.name}</h3>
        <p className="recommend-reason">
          This estimate combines likely treatment expense, scheme support, and patient payable amount.
        </p>
      </div>

      <div className="panel">
        <div className="field-label">Estimated Treatment Cost</div>
        <div className="cost-value">{recommendedHospital.cost}</div>
      </div>

      <div className="panel">
        <div className="field-label">PM-JAY / Scheme Support</div>
        <div className="field-value">{recommendedHospital.support}</div>

        <div className="field-label">Expected Out-of-Pocket</div>
        <div className="field-value">{recommendedHospital.payable}</div>
      </div>

      <div className="panel">
        <div className="field-label">Easy Monthly Option</div>
        <div className="field-value">{recommendedHospital.emi}</div>
        <p className="subtext" style={{ marginBottom: 0 }}>
          Financing illustration only for prototype demonstration.
        </p>
      </div>

      <div className="panel">
        <div className="field-label">Recommended Next Step</div>
        <div className="step-desc">
          Verify eligibility documents and confirm the final estimate with the hospital help desk.
        </div>
      </div>
    </div>
  )

  return (
    <div className="app-shell">
      {screen === 'assistant' && assistantScreen}
      {screen === 'analysis' && analysisScreen}
      {screen === 'hospitals' && hospitalsScreen}
      {screen === 'costs' && costScreen}
    </div>
  )
}