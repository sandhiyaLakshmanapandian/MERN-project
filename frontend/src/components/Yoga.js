import React from 'react';

function Yoga() {
  // Log image loading status
  const handleImageLoad = (imageName) => {
    console.log(`✅ ${imageName} loaded successfully`);
  };

  const handleImageError = (imageName) => {
    console.error(`❌ ${imageName} failed to load`);
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold text-primary mb-3">
          🧘 Yoga for Memory Enhancement
        </h2>
        <p className="lead text-secondary">
          Yoga combines physical postures, breathing exercises, and meditation to improve brain 
          function, reduce stress, and enhance memory. Regular practice increases blood flow to 
          the brain and promotes neuroplasticity.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="card shadow-lg border-0 mb-4">
        <div className="card-body p-4 p-md-5">
          <h3 className="card-title h2 text-primary mb-4">
            <span className="me-2">🧘‍♀️</span> Yoga & Meditation
          </h3>
          
          {/* How Yoga Enhances Memory */}
          <div className="mb-5">
            <h4 className="h3 text-info mb-4">How Yoga Enhances Memory</h4>
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <div className="list-group">
                  <div className="list-group-item list-group-item-action bg-light border-start border-primary border-4">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-3">🫁</span>
                      <p className="mb-0">Increases oxygen supply to the brain through controlled breathing (Pranayama)</p>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action bg-light border-start border-info border-4">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-3">😌</span>
                      <p className="mb-0">Reduces stress hormones like cortisol that impair memory</p>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action bg-light border-start border-success border-4">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-3">🎯</span>
                      <p className="mb-0">Improves focus and concentration through mindfulness practices</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <img 
                  src="/images/icons/861.jpg" 
                  alt="Yoga Practice" 
                  className="img-fluid rounded shadow"
                  style={{maxHeight: '300px', objectFit: 'cover', width: '100%'}}
                  onLoad={() => handleImageLoad('Yoga Practice (861.jpg)')}
                  onError={() => handleImageError('Yoga Practice (861.jpg)')}
                />
              </div>
            </div>
          </div>

          <hr className="my-5" />

          {/* Best Yoga Poses */}
          <div className="mb-5">
            <h4 className="h3 text-info mb-4">Best Yoga Poses for Memory</h4>
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <div className="accordion" id="yogaPosesAccordion">
                  <div className="accordion-item border-start border-primary border-4">
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#pose1">
                        <strong className="text-primary">1. Padmasana (Lotus Pose)</strong>
                      </button>
                    </h2>
                    <div id="pose1" className="accordion-collapse collapse show" data-bs-parent="#yogaPosesAccordion">
                      <div className="accordion-body">
                        Calms the mind and improves concentration.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-start border-info border-4">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#pose2">
                        <strong className="text-info">2. Paschimottanasana (Seated Forward Bend)</strong>
                      </button>
                    </h2>
                    <div id="pose2" className="accordion-collapse collapse" data-bs-parent="#yogaPosesAccordion">
                      <div className="accordion-body">
                        Increases blood flow to the brain, calms nervous system, reduces anxiety.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-start border-success border-4">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#pose3">
                        <strong className="text-success">3. Sarvangasana (Shoulder Stand)</strong>
                      </button>
                    </h2>
                    <div id="pose3" className="accordion-collapse collapse" data-bs-parent="#yogaPosesAccordion">
                      <div className="accordion-body">
                        Inverted pose that increases blood circulation to the brain.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <img 
                  src="/images/icons/880.jpg" 
                  alt="Yoga Poses" 
                  className="img-fluid rounded shadow"
                  style={{maxHeight: '300px', objectFit: 'cover', width: '100%'}}
                  onLoad={() => handleImageLoad('Yoga Poses (880.jpg)')}
                  onError={() => handleImageError('Yoga Poses (880.jpg)')}
                />
              </div>
            </div>
          </div>

          <hr className="my-5" />

          {/* Meditation Practices */}
          <div className="mb-5">
            <h4 className="h3 text-info mb-4">Meditation Practices</h4>
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <div className="list-group">
                  <div className="list-group-item list-group-item-action">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-3">🧠</span>
                      <div>
                        <h5 className="mb-1 text-primary">Mindfulness Meditation</h5>
                        <p className="mb-0 text-muted">Focus on present moment awareness to strengthen attention and working memory</p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-3">🎨</span>
                      <div>
                        <h5 className="mb-1 text-info">Guided Visualization</h5>
                        <p className="mb-0 text-muted">Mental imagery exercises enhance spatial and visual memory</p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-3">🕉️</span>
                      <div>
                        <h5 className="mb-1 text-success">Mantra Meditation</h5>
                        <p className="mb-0 text-muted">Repetition of sounds or phrases improves concentration and verbal memory</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <img 
                  src="/images/icons/884.jpg" 
                  alt="Meditation" 
                  className="img-fluid rounded shadow"
                  style={{maxHeight: '300px', objectFit: 'cover', width: '100%'}}
                  onLoad={() => handleImageLoad('Meditation (884.jpg)')}
                  onError={() => handleImageError('Meditation (884.jpg)')}
                />
              </div>
            </div>
          </div>

          <hr className="my-5" />

          {/* Daily Routine */}
          <div className="mb-5">
            <div className="card bg-warning bg-opacity-10 border-warning border-2">
              <div className="card-body">
                <h4 className="card-title h3 text-warning-emphasis mb-4">
                  <span className="me-2">📅</span> Daily Yoga Routine for Memory
                </h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title"><span className="badge bg-primary me-2">1</span>Pranayama</h5>
                        <p className="card-text">Start with 5 minutes of Pranayama (Deep Breathing)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title"><span className="badge bg-info me-2">2</span>Yoga Poses</h5>
                        <p className="card-text">Practice 3-4 yoga poses focusing on inversions and forward bends</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title"><span className="badge bg-success me-2">3</span>Meditation</h5>
                        <p className="card-text">End with 5 minutes of meditation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title"><span className="badge bg-secondary me-2">4</span>Consistency</h5>
                        <p className="card-text">Practice consistently for best results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific Benefits */}
          <div className="mb-5">
            <div className="alert alert-info border-2 shadow-sm">
              <h4 className="alert-heading h4">
                <span className="me-2">🔬</span> Scientific Benefits
              </h4>
              <p className="mb-0 lead">
                Regular yoga practice can increase gray matter volume in the hippocampus and prefrontal cortex, 
                crucial for memory and learning.
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mb-5">
            <div className="alert alert-danger border-2 shadow-sm">
              <h4 className="alert-heading h4">
                <span className="me-2">⚠️</span> Important Notes
              </h4>
              <ul className="mb-0">
                <li className="mb-2">Consult a healthcare provider before starting any new exercise routine</li>
                <li className="mb-2">Learn poses from a qualified yoga instructor initially</li>
                <li className="mb-2">Avoid inverted poses if you have high blood pressure or neck issues</li>
                <li>Practice on an empty stomach or 2-3 hours after meals</li>
              </ul>
            </div>
          </div>

          {/* Further Reading */}
          <div>
            <div className="card bg-light border-2">
              <div className="card-body">
                <h4 className="card-title h4 mb-3">
                  <span className="me-2">📚</span> Further Reading
                </h4>
                <div className="list-group list-group-flush">
                  <a 
                    href="https://en.wikipedia.org/wiki/Yoga" 
                    target="_blank" 
                    rel="noreferrer"
                    className="list-group-item list-group-item-action d-flex align-items-center"
                  >
                    <span className="me-2">→</span> Wikipedia - Yoga
                  </a>
                  <a 
                    href="https://en.wikipedia.org/wiki/Pranayama" 
                    target="_blank" 
                    rel="noreferrer"
                    className="list-group-item list-group-item-action d-flex align-items-center"
                  >
                    <span className="me-2">→</span> Wikipedia - Pranayama
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-muted small mt-4">
        <p className="fst-italic">Check your browser console (F12) for image loading status logs</p>
      </div>
    </div>
  );
}

export default Yoga;