// index.js
const express = require('express');
const app = express();
const port = 3000;

const properties = [
  { id: 1, title: 'Beach House', description: 'A beautiful beach house.', price: 500000, image: '/images/beach-house.jpg' },
  { id: 2, title: 'Mountain Villa', description: 'Luxury villa in the mountains.', price: 700000, image: '/images/mountain-villa.jpg' },
  // Add more properties as needed
];

app.get('/api/properties', (req, res) => {
  res.json(properties);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
