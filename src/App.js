import React, { useEffect, useState } from 'react';
import Data from "./data.json";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from './component/card';
import './App.css';




// App component
const App = () => {
  // Sample card data
  const initialCardsData = Data.map((post) => ({
    title: post.title,
    description: post.description,
    color: post.color,
  }));

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
        <div className='test'>
          <h2>Testing</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
