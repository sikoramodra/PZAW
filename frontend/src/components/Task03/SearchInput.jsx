import debounce from 'debounce';

function SearchInput({ setQ }) {
  const onSearchChange = debounce((e) => {
    setQ(e.target.value);
  }, 300);

  return (
    <input className="form-control" type="text" onChange={onSearchChange} />
  );
}

export default SearchInput;
