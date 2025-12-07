import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">

      {/* CSS in same file */}
      <style>{`
        .home-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f0f4f8;
          color: #333;
          min-height: 100vh;
        }

        /* Hero Section */
        .hero-section {
          background-color: #dce6ff;
          text-align: center;
          padding: 80px 20px;
        }
        .hero-section h1 {
          font-weight: 700;
          color: #2c3e50;
        }
        .hero-section p {
          font-size: 18px;
          color: #555;
          max-width: 700px;
          margin: 20px auto 0;
        }

        /* About Section */
        .about-section {
          padding: 60px 0;
        }
        .about-section h2 {
          color: #2c3e50;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .about-section p {
          font-size: 16px;
          color: #555;
          margin-bottom: 15px;
        }

        /* Methods Section */
        .methods-section {
          padding: 60px 0;
        }
        .methods-section h2 {
          color: #2c3e50;
          font-weight: 700;
          margin-bottom: 40px;
        }
        .cards-row {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }
        .method-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          width: 280px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .method-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        .method-card h3 {
          font-weight: 700;
          margin-bottom: 15px;
        }
        .method-card p {
          font-size: 15px;
          color: #555;
          margin-bottom: 20px;
        }
        .btn {
          background-color: #2c3e50;
          color: #fff;
          padding: 8px 18px;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.3s;
        }
        .btn:hover {
          background-color: #1a2a3a;
        }

        /* Tips Section */
        .tips-section {
          padding: 60px 0;
        }
        .tips-section h2 {
          color: #2c3e50;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .tips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .tip {
          background-color: #fff;
          padding: 20px;
          width: 250px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          transition: transform 0.3s;
        }
        .tip:hover {
          transform: translateY(-5px);
        }
        .tip-badge {
          font-size: 24px;
        }

        /* Footer */
        footer {
          background-color: #2c3e50;
          color: #fff;
          padding: 40px 20px;
          text-align: center;
        }
        footer p {
          margin: 5px 0;
        }
      `}</style>

     

      <div className="container">

        {/* About Section */}
        <section className="about-section">
          <h2>🧠 Enhance Your Memory Power</h2>
          <p>
            Memory is one of the most important cognitive functions that affects every aspect of our lives. 
            Whether you're a student, professional, or simply someone looking to keep your mind sharp, 
            improving your memory can lead to better performance and quality of life.
          </p>
          <p>
            This website provides comprehensive guidance on three key areas that are scientifically proven 
            to enhance memory: mental exercises through games, physical wellness through yoga, and 
            nutritional support through brain-boosting foods.
          </p>
        </section>

        {/* Memory Enhancement Methods */}
        <section className="methods-section">
          <h2>Explore Our Memory Enhancement Methods</h2>
          <div className="cards-row">
            <div className="method-card">
              <h3>🎮 Brain Games</h3>
              <p>Engage in stimulating mental exercises that challenge your cognitive abilities and strengthen neural connections.</p>
              <Link to="/games" className="btn">Learn More</Link>
            </div>
            <div className="method-card">
              <h3>🧘 Yoga & Meditation</h3>
              <p>Practice mindfulness and physical postures that improve blood flow to the brain and reduce stress.</p>
              <Link to="/yoga" className="btn">Learn More</Link>
            </div>
            <div className="method-card">
              <h3>🥗 Brain Foods</h3>
              <p>Discover nutritious foods rich in antioxidants, omega-3s, and vitamins that fuel your brain.</p>
              <Link to="/foods" className="btn">Learn More</Link>
            </div>
          </div>
        </section>

        {/* Quick Memory Tips */}
        <section className="tips-section">
          <h2>Quick Memory Tips</h2>
          <div className="tips-grid">
            <div className="tip"><span className="tip-badge">🛌</span> Get Adequate Sleep: 7-9 hours</div>
            <div className="tip"><span className="tip-badge">💧</span> Stay Hydrated</div>
            <div className="tip"><span className="tip-badge">🏃</span> Regular Exercise</div>
            <div className="tip"><span className="tip-badge">🧘</span> Practice Mindfulness</div>
            <div className="tip"><span className="tip-badge">🧩</span> Challenge Your Brain</div>
          </div>
        </section>

      </div>

     
    </div>
  );
}

export default Home;
