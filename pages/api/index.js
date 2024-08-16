const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../../public')));

// Import the date route handler
require('./date')(app);

// Serve the index.html file from the 'public' folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;