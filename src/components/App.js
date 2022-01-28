import React, { useState } from 'react';

import ListInput from './ListInput';
import ListItem from './ListItem';
import './App.css';

const App = () => {

	const [ input, setInput ] = useState('')
	const [clearTarget, setClearTarget ] = useState(null)
	const [ todos, setTodos ] = useState([])

	const clearInputField = (target) => {
		target.value = ""
	}

	const handleInputOnChange = (event) => {
		setClearTarget(event.target)
		setInput(event.target.value)
	}

	const handleInputOnClick = () => {
		if ( input.length > 0 ) {
			setTodos([...todos, input])
			clearInputField(clearTarget)
		} else {
			alert('Please Enter a List Item')
		}
	}

	const handleRemove = (index) => {
		let newTodos = todos.filter(item => index !== todos.indexOf(item))
		setTodos(newTodos)
	}

	return (
		<div className="App">
			<ListInput
				HandleOnClick={ handleInputOnClick }
				HandleOnChange={ handleInputOnChange }
			/>
			{todos.map((todo, index) => 
				<ListItem 
					Todo={todo}
					Index={index}
					key={index}
					HandleRemove={ handleRemove }
				/>
			)}
		</div>
	);
}

export default App;
