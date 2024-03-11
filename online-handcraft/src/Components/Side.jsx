import basket from './basket.png'
import wood from './wood.png'
import { useState } from 'react';
function Side() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} />
			<img src={basket}/>
            <img src={wood}/>
		</div>
	);
}

export default Side;