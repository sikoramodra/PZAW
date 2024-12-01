import axios from 'axios';
import { useEffect, useState } from 'react';

function PokemonCard({ pokemon, onCardClick }) {
  const [img, setImg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/task03/pokemon/image/${pokemon.id}`)
      .then((res) => setImg(res.data))
      .catch((e) => console.log(`Error fetching image: ${e.message}`))
      .finally(() => setIsLoading(false));
  });

  return (
    <div
      className="m-2 p-3 border border-secondary rounded text-center"
      onClick={() => onCardClick(pokemon.base)}
    >
      <div
        className="image-container mb-2 d-flex align-items-center justify-content-center"
        style={{ width: '400px', height: '400px' }}
      >
        {isLoading ? (
          <div className="spinner-border"></div>
        ) : (
          <img
            src={`data:image/png;base64,${img}`}
            alt={pokemon.name.english}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        )}
      </div>
      <p className="font-weight-bold">{pokemon.name.english}</p>
      <p className="text-muted">{pokemon.type.join(', ')}</p>
    </div>
  );
}

export default PokemonCard;
