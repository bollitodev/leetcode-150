const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 4000;

const LEETCODE_SESSION = process.env.LEETCODE_SESSION;
const CSRFTOKEN = process.env.CSRFTOKEN;

app.use(cors());

app.use(express.json());

app.post('/graphql', async (req, res) => {
  const response = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `LEETCODE_SESSION=${LEETCODE_SESSION}; csrftoken=${CSRFTOKEN}`,
    },
    body: JSON.stringify(req.body),
  },5000);

  const data = await response.json();
  console.log(req.headers);
  console.log(response.headers);
  console.log(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
