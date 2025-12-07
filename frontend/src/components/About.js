import React from 'react';

function About() {
  // Log image loading status
  const handleImageLoad = (imageName) => {
    console.log(`✅ ${imageName} loaded successfully`);
  };

  const handleImageError = (imageName) => {
    console.error(`❌ ${imageName} failed to load`);
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{maxWidth: '900px'}}>
        
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-4">About Memory Enhancement</h2>
          <img 
            src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=400&fit=crop" 
            alt="Brain science" 
            className="img-fluid rounded shadow-lg mb-4"
            style={{maxHeight: '400px', width: '100%', objectFit: 'cover'}}
            onLoad={() => handleImageLoad('Brain science image')}
            onError={() => handleImageError('Brain science image')}
          />
        </div>

        {/* Main Content Card */}
        <div className="card shadow-lg border-0 mb-4">
          <div className="card-body p-4 p-md-5">
            
            {/* Understanding Memory */}
            <div className="mb-5">
              <h3 className="h4 text-primary mb-3">Understanding Memory</h3>
              <p className="text-secondary lh-lg">
                Memory is the faculty of the mind by which data or information is encoded, stored, 
                and retrieved when needed. It is the retention of information over time for the purpose 
                of influencing future action. Memory encompasses three major processes: encoding, storage, 
                and retrieval.
              </p>
            </div>

            {/* Types of Memory */}
            <div className="mb-5">
              <h3 className="h4 text-primary mb-3">Types of Memory</h3>
              <div className="list-group">
                <div className="list-group-item border-start border-primary border-4">
                  <h5 className="mb-2 text-primary">Short-term Memory</h5>
                  <p className="mb-0 text-secondary">
                    Also known as working memory, holds information temporarily for processing 
                    (typically 15-30 seconds).
                  </p>
                </div>
                <div className="list-group-item border-start border-info border-4">
                  <h5 className="mb-2 text-info">Long-term Memory</h5>
                  <p className="mb-0 text-secondary">
                    Stores information for extended periods, from hours to a lifetime. This includes 
                    episodic (events), semantic (facts), and procedural (skills) memories.
                  </p>
                </div>
                <div className="list-group-item border-start border-success border-4">
                  <h5 className="mb-2 text-success">Sensory Memory</h5>
                  <p className="mb-0 text-secondary">
                    Brief retention of sensory information (visual, auditory, etc.) lasting 
                    milliseconds to seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Memory Enhancement Matters */}
            <div className="mb-5">
              <h3 className="h4 text-primary mb-3">Why Memory Enhancement Matters</h3>
              <p className="text-secondary lh-lg mb-3">
                Improving memory is crucial for academic success, professional performance, and 
                maintaining independence as we age. Strong memory skills enable us to:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="badge bg-primary me-2">✓</span>
                  <span className="text-secondary">Learn new information more effectively</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-primary me-2">✓</span>
                  <span className="text-secondary">Make better decisions based on past experiences</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-primary me-2">✓</span>
                  <span className="text-secondary">Maintain relationships by remembering important details</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-primary me-2">✓</span>
                  <span className="text-secondary">Reduce the risk of cognitive decline</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-primary me-2">✓</span>
                  <span className="text-secondary">Increase productivity and efficiency</span>
                </li>
              </ul>
            </div>

            {/* The Science Behind Memory Enhancement */}
            <div className="mb-5">
              <h3 className="h4 text-primary mb-3">The Science Behind Memory Enhancement</h3>
              <p className="text-secondary lh-lg">
                Neuroplasticity, the brain's ability to reorganize itself by forming new neural 
                connections, is the foundation of memory improvement. Through targeted activities, 
                proper nutrition, and lifestyle choices, we can strengthen existing neural pathways 
                and create new ones.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop" 
                alt="Neuroplasticity" 
                className="img-fluid rounded shadow-lg my-4"
                style={{maxHeight: '400px', width: '100%', objectFit: 'cover'}}
                onLoad={() => handleImageLoad('Neuroplasticity image')}
                onError={() => handleImageError('Neuroplasticity image')}
              />
            </div>

            {/* Our Approach */}
            <div className="mb-5">
              <h3 className="h4 text-primary mb-3">Our Approach</h3>
              <p className="text-secondary lh-lg mb-3">
                This platform focuses on three evidence-based pillars for memory enhancement:
              </p>
              
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 border-primary border-2 shadow-sm">
                    <div className="card-body text-center">
                      <div className="display-4 mb-3">🎮</div>
                      <h5 className="card-title text-primary">Cognitive Training</h5>
                      <span className="badge bg-primary mb-3">Games</span>
                      <p className="card-text text-secondary small">
                        Mental exercises that challenge and stimulate different aspects of memory 
                        and cognitive function.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="card h-100 border-info border-2 shadow-sm">
                    <div className="card-body text-center">
                      <div className="display-4 mb-3">🧘</div>
                      <h5 className="card-title text-info">Physical Wellness</h5>
                      <span className="badge bg-info mb-3">Yoga</span>
                      <p className="card-text text-secondary small">
                        Mind-body practices that reduce stress, improve circulation, and promote 
                        mental clarity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="card h-100 border-success border-2 shadow-sm">
                    <div className="card-body text-center">
                      <div className="display-4 mb-3">🥗</div>
                      <h5 className="card-title text-success">Nutritional Support</h5>
                      <span className="badge bg-success mb-3">Food</span>
                      <p className="card-text text-secondary small">
                        Brain-healthy foods that provide essential nutrients for optimal cognitive 
                        function.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learn More Section */}
            <div className="alert alert-info border-info border-start border-4 shadow-sm">
              <h5 className="alert-heading fw-bold">
                <span className="me-2">📚</span>Learn More
              </h5>
              <p className="mb-2">
                For additional scientific information about memory and cognition, visit:
              </p>
              <div className="list-group list-group-flush">
                <a 
                  href="https://en.wikipedia.org/wiki/Memory" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action border-0 ps-0"
                >
                  <span className="me-2">→</span>Wikipedia - Memory
                </a>
                <a 
                  href="https://en.wikipedia.org/wiki/Neuroplasticity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action border-0 ps-0"
                >
                  <span className="me-2">→</span>Wikipedia - Neuroplasticity
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-muted small mt-4">
          <p className="fst-italic mb-0">Check your browser console (F12) for image loading status logs</p>
        </div>
      </div>
    </div>
  );
}

export default About;