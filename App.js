import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const suits = ['H', 'D', 'C', 'S']; // Hearts, Diamonds, Clubs, Spades
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];//values
    const deck = [];

    // Populate deck
    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({ value, suit, imageUrl: `https://deckofcardsapi.com/static/img/${value}${suit}.png` });
      });
    });

    // Draw two unique cards
    const drawTwoUniqueCards = () => {
      const cardIndexes = new Set();
      while (cardIndexes.size < 2) {
        const index = Math.floor(Math.random() * deck.length);
        cardIndexes.add(index);
      }
      return Array.from(cardIndexes).map(index => deck[index]);
    };

    const newCards = drawTwoUniqueCards();
    setCards(newCards);

    // Calculate score
    const calculateScore = (cards) => {
      return cards.reduce((acc, card) => {
        let value = card.value;
        if (['J', 'Q', 'K', '10'].includes(value)) return acc + 10;
        if (value === 'A') return acc + 11;
        return acc + parseInt(value);
      }, 0);
    };

    setScore(calculateScore(newCards));
  }, []);

  return (
    <div className="App">
      <h1>Blackjack Game</h1>
      {cards.map(card => (
        <img key={card.imageUrl} src={card.imageUrl} alt={`Card ${card.value} of ${card.suit}`} style={{ margin: '10px' }} />
      ))}
      <h2>Score: {score}</h2>
      {score === 21 && <h2>Blackjack!</h2>}
    </div>
  );
}

export default App;
