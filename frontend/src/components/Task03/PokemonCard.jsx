import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';

const LazyImage = ({ src, alt }) => (
  <img src={`data:image/png;base64,${src}`} alt={alt} loading="lazy" />
);

function PokemonCard({ pokemon, onCardClick }) {
  const [img, setImg] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/task03/pokemon/image/${pokemon.id}`)
      .then((res) => setImg(res.data))
      .catch((e) => console.log(`Error fetching image: ${e.message}`));
  });

  return (
    <div onClick={() => onCardClick(pokemon.base)}>
      <Suspense fallback={<p>Loading...</p>}>
        {img && <LazyImage src={img} alt={pokemon.name.english} />}
      </Suspense>
      <p>{pokemon.name.english}</p>
      <p>{pokemon.type.join(', ')}</p>
    </div>
  );
}

export default PokemonCard;
