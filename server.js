const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/places', async (req, res) => {
  const { location, radius, type } = req.query;
  const API_KEY = 'AIzaSyD6rTN0L_D5vj9scPm_dPYjyNqTwcFpr90'; // Replace with your API key

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
        params: {
          location,
          radius,
          type,
          key: API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Other Approach from chatgpt

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const PORT = 5000; // or any port you prefer
// const API_KEY = 'AIzaSyD6rTN0L_D5vj9scPm_dPYjyNqTwcFpr90';

// app.use(cors());

// app.get('/api/places', async (req, res) => {
//   const { location, radius, type } = req.query;
//   try {
//     const response = await axios.get(
//       `https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
//         params: {
//           location,
//           radius,
//           type,
//           key: API_KEY,
//         },
//       }
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
