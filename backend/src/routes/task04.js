import { Router } from 'express';
import { readFileSync, writeFileSync } from 'node:fs';
import bcrypt from 'bcryptjs';

const router = Router();

router.post('/register', async (req, res) => {
  const { email, password, gender, university } = req.body;

  if (!email || !password || !gender || !university) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const users = JSON.parse(readFileSync('src/json/users.json', 'utf8'));

    const userExists =
      users.length === 0 ? false : users.some((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHashed = bcrypt.hashSync(password, salt);
    const newUser = { email, passwordHashed, gender, university };

    users.push(newUser);

    writeFileSync(
      'src/json/users.json',
      JSON.stringify(users, null, 2),
      'utf8',
    );

    return res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Error registering user: ${err.message}` });
  }
});

router.get('/image/:id', (req, res) => {
  setTimeout(() => {
    try {
      const img = readFileSync(
        `src/images/${req.params.id.padStart(3, '0')}.png`,
      );
      res.status(200).send(img.toString('base64'));
    } catch {
      res.status(404).send('Image not found');
    }
  }, 500);
});

export default router;
