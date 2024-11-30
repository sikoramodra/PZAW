function PokemonStats({ stats }) {
  if (!stats) return null;

  return (
    <div>
      <p>Stats</p>
      <p>HP: {stats.HP}</p>
      <p>Attack: {stats.Attack}</p>
      <p>Defense: {stats.Defense}</p>
      <p>Sp. Attack: {stats['Sp. Attack']}</p>
      <p>Sp. Defense: {stats['Sp. Defense']}</p>
      <p>Speed: {stats.Speed}</p>
    </div>
  );
}

export default PokemonStats;
