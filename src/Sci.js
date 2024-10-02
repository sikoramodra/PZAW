import { useRef } from "react";

function Sci() {
	const inputRef = useRef()
	
	const handleButton = () => {
		console.log("HI");
		console.log(inputRef.current.value)
	}

	const handleInputText = (e) => {
		console.log(e.target.value);
	}

	return (
		<div>
			Sci
			<input type="button" value="asd" onClick={handleButton}></input>

			<input ref={inputRef} type="text" onChange={handleInputText}></input>
		</div>
	);
}

export default Sci;
