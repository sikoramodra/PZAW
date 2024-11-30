function PokemonStats({ stats, onClose }) {
  if (!stats) return null;

  return (
    <div
      className="modal fade show d-block"
      role="dialog"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Stats</h5>
            <input
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></input>
          </div>
          <div className="modal-body">
            <p>HP: {stats.HP}</p>
            <p>Attack: {stats.Attack}</p>
            <p>Defense: {stats.Defense}</p>
            <p>Sp. Attack: {stats['Sp. Attack']}</p>
            <p>Sp. Defense: {stats['Sp. Defense']}</p>
            <p>Speed: {stats.Speed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonStats;
