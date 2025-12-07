import React from "react";

function Games() {
  // Brain games data
  const games = [
    {
      title: "Chess",
      desc: "Requires players to remember patterns, anticipate opponent moves, and recall strategies. Exercises both short-term and long-term memory.",
      img: "/images/games/chess.jpg",
      link: "https://www.chess.com/learn",
    },
    {
      title: "Memory Card Games",
      desc: "Classic matching games that target visual memory and pattern recognition.",
      img: "/images/games/memory-cards.jpg",
      link: "https://www.memozor.com/memory-games",
    },
    {
      title: "Sudoku",
      desc: "Enhances working memory by requiring logical reasoning and tracking multiple possibilities.",
      img: "/images/games/sudoku.jpg",
      link: "https://sudoku.com",
    },
    {
      title: "Crossword Puzzles",
      desc: "Strengthens verbal memory and vocabulary.",
      img: "/images/games/crossword.jpg",
      link: "https://www.nytimes.com/crosswords",
    },
    {
      title: "Brain Training Apps",
      desc: "Apps designed to improve memory, attention, speed, and problem-solving.",
      img: "/images/games/brain-training.jpg",
      link: "https://www.lumosity.com",
    },
     {
      title: "Pallan",
      desc: "This game involves strategic thinking and planning, which en ..",
      img: "/images/games/pallan.jpg",
      link: "https://en.wikipedia.org/wiki/Pallanguzhi",
    },
  ];

  // Memory techniques with icons
  const memoryTechniques = [
    { title: "Chunking", desc: "Break down large pieces of information.", img: "/images/icons/chunking.png" },
    { title: "Method of Loci", desc: "Associate information with locations.", img: "/images/icons/loci.png" },
    { title: "Mnemonics", desc: "Use acronyms or rhymes.", img: "/images/icons/whiteboard.png"},
    { title: "Spaced Repetition", desc: "Review at intervals.", img: "/images/icons/arrow.png" },
  ];

  // Daily practices with icons
  const dailyPractices = [
    { text: "Spend 15–20 mins daily", img: "/images/icons/time.png" },
    { text: "Vary game types", img: "/images/icons/chunking.png" },
    { text: "Increase difficulty gradually", img: "/images/icons/writing.png" },
    { text: "Stay consistent", img: "/images/icons/loci.png" },
    { text: "Track progress", img: "/images/icons/whiteboard.png" },
    {text: "make challenge", img: "/images/icons/backup.png" },
  ];

  return (
    <div className="page-container" style={{ backgroundColor: "#f9faff", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ color: "#2c3e50", fontWeight: "700" }}>🎮 Brain Games for Memory Enhancement</h2>
          <p style={{ color: "#555", fontSize: "16px" }}>
            Mental exercises and brain games are proven methods to improve memory, concentration, and overall cognitive function. Regular practice can strengthen neural connections and enhance brain plasticity.
          </p>
        </div>

        {/* Brain Games Section */}
        <h3 style={{ color: "#34495e", marginBottom: "20px" }}>Top Memory-Boosting Games</h3>
        <div className="row">
          {games.map((game, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: "15px", transition: "0.3s" }}>
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <img src={game.img} alt={game.title} className="card-img-top" style={{ borderRadius: "15px 15px 0 0", height: "200px", objectFit: "cover" }} />
                </a>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#2c3e50" }}>{game.title}</h5>
                  <p className="card-text" style={{ color: "#555" }}>{game.desc}</p>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Memory Techniques Section */}
        <h3 className="mt-5" style={{ color: "#34495e" }}>Memory Techniques to Practice</h3>
        <div className="row">
          {memoryTechniques.map((tech, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="d-flex align-items-center p-3 bg-white shadow-sm rounded">
                <img src={tech.img} alt={tech.title} style={{ width: "50px", marginRight: "15px" }} />
                <div>
                  <strong>{tech.title}:</strong> {tech.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Practices Section */}
        <h3 className="mt-5" style={{ color: "#34495e" }}>Daily Practice Recommendations</h3>
        <div className="row">
          {dailyPractices.map((practice, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="d-flex align-items-center p-3 bg-white shadow-sm rounded">
                <img src={practice.img} alt={practice.text} style={{ width: "50px", marginRight: "15px" }} />
                <div>{practice.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Further Reading */}
        <h3 className="mt-5" style={{ color: "#34495e" }}>📚 Further Reading</h3>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Brain_training" target="_blank" rel="noopener noreferrer">
              Wikipedia - Brain Training
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Mnemonic" target="_blank" rel="noopener noreferrer">
              Wikipedia - Mnemonic Techniques
            </a>
          </li>
          <li>
            <a href="https://www.healthline.com/nutrition/brain-foods" target="_blank" rel="noopener noreferrer">
              Nutrition for Better Memory
            </a>
          </li>
          <li>
            <a href="https://www.verywellmind.com/how-to-improve-memory-2795" target="_blank" rel="noopener noreferrer">
              Scientific Ways to Improve Memory
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Games;
// 