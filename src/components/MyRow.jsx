function MyRow(props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.k1}</td>
      <td>
        <input type="button" onClick={props.onButtonClick} />
      </td>
    </tr>
  );
}

export default MyRow;
