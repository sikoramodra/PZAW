import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import PokemonCard from './PokemonCard.jsx';
import PokemonStats from './PokemonStats.jsx';
import TypeFilter from './TypeFilter.jsx';

function Task03() {
  const [q, setQ] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [selectedStats, setSelectedStats] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemons = (reset = false) => {
    axios
      .get('http://localhost:3000/task03/pokemon', {
        params: {
          q: q,
          types: selectedTypes.join(','),
          page: reset ? 1 : page,
          limit: 20,
        },
      })
      .then((res) => {
        const { data, total } = res.data;

        if (reset) {
          setPokemons(data);
          setPage(2);
        } else {
          setPokemons((prev) => [...prev, ...data]);
          setPage((prev) => prev + 1);
        }

        setHasMore(pokemons.length + data.length < total);
      })
      .catch((e) => console.log(`Error fetching Pokémon: ${e.message}`));
  };

  useEffect(() => {
    fetchPokemons(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, selectedTypes]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/task03/pokemon/types')
      .then((res) => {
        setTypes(res.data);
        setSelectedTypes(res.data.map((item) => item.english));
      })
      .catch((e) => console.log(`Error fetching types: ${e.message}`));
  }, []);

  const onTypeChange = (e) => {
    setSelectedTypes(
      e.target.checked
        ? [...selectedTypes, e.target.value]
        : selectedTypes.filter((type) => type !== e.target.value),
    );
  };

  return (
    <div className="container-fluid p-3">
      <input
        className="form-control"
        type="text"
        onChange={(e) => setQ(e.target.value)}
      />
      <TypeFilter
        types={types}
        selectedTypes={selectedTypes}
        onTypeChange={onTypeChange}
      />
      <PokemonStats
        stats={selectedStats}
        onClose={() => setSelectedStats(null)}
      />
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchPokemons}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className="container-fluid d-flex flex-wrap justify-content-center"
      >
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onCardClick={setSelectedStats}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Task03;
