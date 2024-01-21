const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

app.get('/api/profile', (req, res) => {
  // sendError({status: 401, errorMsg: 'Invalid token', res});

  setTimeout(() => {
    res.status(200).json({
      name: 'Gulshat Khabibullina',
      job: 'Frontend Developer',
      email: 'johndoe@example.com',
      location: 'Serbia, Belgrade',
      interests: ['programming', 'reading', 'traveling'],
      bio: "I'm a software developer passionate about creating innovative solutions.",
      avatar:
        'https://avatars.githubusercontent.com/u/59819426?v=4',
    });
  }, 2000);
});

app.post('/api/login', (req, res) => {
  // sendError({status: 401, errorMsg: 'Invalid token', res});

  setTimeout(() => {
    res.status(200).json({
      access_token: 'here.canbe.token',
      refresh_token: 'here.canbe.rtoken',
      expires_in: getValidTokenExpiresDate(),
      refresh_expires_in: getValidTokenExpiresDate(),
      // expires_in: getInvalidTokenExpiresDate(),
      // refresh_expires_in: getInvalidTokenExpiresDate()
    });
  }, 2000);
});

app.post('/api/register', (req, res) => {
  // sendError({status: 401, errorMsg: 'Invalid token', res});

  setTimeout(() => {
    res.status(200).json({
      access_token: 'here.canbe.token',
      refresh_token: 'here.canbe.rtoken',
      expires_in: getValidTokenExpiresDate(),
      refresh_expires_in: getValidTokenExpiresDate(),
      // expires_in: getInvalidTokenExpiresDate(),
      // refresh_expires_in: getInvalidTokenExpiresDate()
    });
  }, 2000);
});

app.post('/api/refresh', (req, res) => {
  // sendError({status: 500, errorMsg: 'Internal server error', res});

  res.status(200).json({
    access_token: 'here.canbe.token2',
    refresh_token: 'here.canbe.rtoken2',
    expires_in: getValidTokenExpiresDate(),
    refresh_expires_in: getValidTokenExpiresDate(),
    // expires_in: getInvalidTokenExpiresDate(),
    // refresh_expires_in: getInvalidTokenExpiresDate()
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function getValidTokenExpiresDate() {
  return new Date().getTime() + 1000 * 60 * 60 * 24 * 7;
}

function getInvalidTokenExpiresDate() {
  return new Date().getTime() - 1000 * 60 * 60 * 24 * 7;
}

function sendError({ status, errorMsg, res }) {
  try {
    throw new Error(errorMsg);
  } catch (error) {
    res.status(status).json({ error: error.message });
  }
}
