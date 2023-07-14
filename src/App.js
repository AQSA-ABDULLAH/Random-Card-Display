import React from 'react';

// Card component
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// App component
const App = () => {
  // Sample card data
  const cardsData = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 4', description: 'Description for Card 4' },
    { title: 'Card 5', description: 'Description for Card 5' },
    { title: 'Card 6', description: 'Description for Card 6' },
    { title: 'Card 7', description: 'Description for Card 7' },
    { title: 'Card 8', description: 'Description for Card 8' },
    { title: 'Card 9', description: 'Description for Card 9' },
  ];

  return (
    <div className="App">
      <h1>Card List</h1>
      <div className="card-list">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default App;

