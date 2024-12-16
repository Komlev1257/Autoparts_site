import React, { useState } from "react";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Каталог */}
      <div>
        <h2>Каталог</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            "Двигатели",
            "Трансмиссии",
            "Кузовные элементы",
            "Электрооборудование",
          ].map((category, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: "10px",
                backgroundColor: "#f9f9f9",
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
