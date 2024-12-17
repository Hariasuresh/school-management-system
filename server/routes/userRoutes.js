const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Dummy data for role-based authentication
  const users = {
    'admin@example.com': { role: 'admin' },
    'staff@example.com': { role: 'staff' },
    'librarian@example.com': { role: 'librarian' },
  };

  if (users[email] && password === '12345') {
    res.json({ success: true, user: email, role: users[email].role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
