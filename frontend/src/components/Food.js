import React from 'react';

function Foods() {
  const foods = [
    { 
      title: "Blueberries", 
      desc: "Rich in antioxidants that strengthen brain memory and slow down aging.",
      img: "blueberry.jpg",
      link: "https://www.healthline.com/nutrition/10-proven-benefits-of-blueberries" 
    },
    { 
      title: "Walnuts", 
      desc: "High in omega-3 and vitamin E—excellent for boosting memory power.",
      img: "walnut.jpg",
      link: "https://www.healthline.com/nutrition/benefits-of-walnuts"
    },
    { 
      title: "Indian Gooseberry", 
      desc: "Packed with DHA and omega-3 fats that improve brain cell communication.",
      img: "goosberry.jpg",
      link :"https://www.healthline.com/nutrition/indian-gooseberry"
    },
    { 
      title: "Dark Chocolate", 
      desc: "Enhances mood and memory using flavonoids that protect brain neurons.",
      img: "chocalate.jpg",
      link :"https://www.healthline.com/nutrition/7-health-benefits-dark-chocolate"
    },
    { 
      title: "Broccoli", 
      desc: "Contains vitamin K and antioxidants that support cognitive strength.",
      img: "bracoli.jpg",
      link :"https://www.healthline.com/nutrition/benefits-of-broccoli"
    },
    { 
      title: "Green Tea", 
      desc: "Improves focus and memory with caffeine + L-theanine.",
      img: "greentea.jpg",
      link :"https://www.healthline.com/nutrition/top-10-evidence-based-health-benefits-of-green-tea"
    },
    { 
      title: "Eggs", 
      desc: "Rich in choline, a nutrient essential for memory development.",
      img: "egg.jpg",
      link :"https://www.healthline.com/nutrition/proven-health-benefits-of-eggs"
    },
    { 
      title: "Avocado", 
      desc: "Healthy fats improve blood flow to the brain for better concentration.",
      img: "avacoda.jpg",
      link :"https://www.healthline.com/nutrition/avocado-nutrition"
    },
    { 
      title: "Pumpkin Seeds", 
      desc: "Loaded with magnesium, zinc, and antioxidants for stronger memory.",
      img: "seed.jpg",
      link :"https://www.healthline.com/nutrition/11-benefits-of-pumpkin-seeds"
    },
  ];

  return (
    <div className="page-container" style={{ backgroundColor: "#eef5ff", minHeight: "100vh", padding: "40px" }}>
      <div className="container">

        <div className="content-section text-center mb-4">
          <h2 style={{ fontWeight: "700", color: "#2e3faa" }}>🥗 Best Foods to Improve Memory</h2>
          <p className="lead" style={{ color: "#4b4b4b" }}>
            These foods are scientifically proven to strengthen memory, concentration, and brain health.
          </p>
        </div>

        <div 
          className="food-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {foods.map((item, index) => (
            <div
              key={index}
              className="card shadow"
              style={{
                width: "260px",
                borderRadius: "15px",
                overflow: "hidden",
                background: "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={item.img} 
                 alt={item.title} 
                 style={{ width: "100%", height: "160px", objectFit: "cover", cursor: "pointer" }}
                     />
                </a>
              <div style={{ padding: "15px" }}>
                <h5 style={{ color: "#2b3ba7", fontWeight: "600" }}>{item.title}</h5>
                <p style={{ fontSize: "14px", color: "#555" }}>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Foods;
