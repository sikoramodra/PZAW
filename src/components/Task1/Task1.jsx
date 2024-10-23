import './Task1.css';

const truncateString = (string = '', maxLength = 50) =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

function Task1(props) {
  return (
    <div className="box">
      <h3>{props.title}</h3>
      <img src={props.img} alt="img" />
      <p>{truncateString(props.desc)}</p>
    </div>
  );
}

export default Task1;
