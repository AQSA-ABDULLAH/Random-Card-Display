import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Card component
const Card = ({ title, description, color }) => {
  const cardStyle = {
    backgroundColor: color,
    width: '220px',
    height: '200px',
    margin: '0 auto',
  };

  return (
    <div className="card my-3" style={cardStyle}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

// App component
const App = () => {
  // Sample card data
  const initialCardsData = [
    { title: 'Card 1', description: 'Description for Card 1', color: '#FF0000' },
    { title: 'Card 2', description: 'Description for Card 2', color: '#00FF00' },
    { title: 'Card 3', description: 'Description for Card 3', color: '#808080' },
    { title: 'Card 4', description: 'Description for Card 4', color: '#fffdd0' },
    { title: 'Card 5', description: 'Description for Card 5', color: '#FFFF00' },
    { title: 'Card 6', description: 'Description for Card 6', color: '#FF8C00' },
    { title: 'Card 7', description: 'Description for Card 7', color: '#00BCFF' },
    { title: 'Card 8', description: 'Description for Card 8', color: '#AC00FF' },
    { title: 'Card 9', description: 'Description for Card 9', color: '#DF00FF' },
    // Add more cards with colors as needed
  ];

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Shuffle the initial card data
    const shuffledCards = shuffleArray(initialCardsData);
    setCardsData(shuffledCards);
  }, []);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div key={index} className="col-md-4">
              <Card
                title={card.title}
                description={card.description}
                color={card.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
