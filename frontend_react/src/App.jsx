import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [colCount, setColCount] = useState(5);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [groupFilter, setGroupFilter] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((res) => {
        setData(res.data);
        res.data.forEach((item) => {
          setGroupFilter((prev) => ({
            ...prev,
            [item.filename.split("_")[0]]: true,
          }));
        });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setFiltered(
      data.filter((val) => {
        const searchMatches = searchFilter
          ? val.text.toLowerCase().includes(searchFilter.toLowerCase())
          : true;
        const groupMatches = groupFilter[val.filename.split("_")[0]];

        return searchMatches && groupMatches;
      }),
    );
  }, [data, searchFilter, groupFilter]);

  const handleGroupFilterChange = (group, checked) => {
    setGroupFilter((prev) => ({ ...prev, [group]: checked }));
  };

  return (
    <>
      <input
        type="range"
        min={1}
        max={5}
        defaultValue={colCount}
        onChange={(e) => setColCount(e.target.value)}
      />
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      {Object.keys(groupFilter).map((group) => (
        <label key={group}>
          <input
            type="checkbox"
            defaultChecked={true}
            onChange={(e) => handleGroupFilterChange(group, e.target.checked)}
          />
          {group}
        </label>
      ))}

      <div className={`container row row-cols-${colCount}`}>
        {filtered.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={`sci_images/${item.filename}.${item.extension}`}
              className="card-img-top"
              alt={item.text}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{item.text}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
