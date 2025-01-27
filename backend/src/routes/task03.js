import { Router } from 'express';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import pokedex from '../json/pokedex.json' with { type: 'json' };
import types from '../json/types.json' with { type: 'json' };

const __dirname = new URL('.', import.meta.url).pathname.slice(0, -1);

const router = Router();

router.get('/types', (req, res) => {
  res.status(200).json(types);
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json(pokedex.find((pokemon) => pokemon.id === Number(req.params.id)));
});

router.get('/type/:type', (req, res) => {
  res
    .status(200)
    .json(pokedex.filter((pokemon) => pokemon.type.includes(req.params.type)));
});

router.get('/image/:id', (req, res) => {
  const path = join(
    __dirname,
    '../images',
    `${req.params.id.padStart(3, '0')}.png`,
  );
  try {
    const img = readFileSync(path);
    res.status(200).send(img.toString('base64'));
  } catch (error) {
    console.error(error);
    res.status(404).send('Image not found');
  }
});

router.get('', (req, res) => {
  const { q, types, page = 1, limit = 20 } = req.query;

  const filtered = pokedex.filter((pokemon) => {
    const matchesName = q
      ? pokemon.name.english.toLowerCase().includes(q.toLowerCase())
      : true;
    const matchesTypes = types
      ? types.some((type) => pokemon.type.includes(type))
      : false;

    return matchesName && matchesTypes;
  });

  const startIndex = (Number(page) - 1) * Number(limit);
  const paginated = filtered.slice(startIndex, startIndex + Number(limit));

  res.status(200).json({
    data: paginated,
    total: filtered.length,
    page: Number(page),
    limit: Number(limit),
  });
});

export default router;
