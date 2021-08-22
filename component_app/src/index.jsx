import React from 'react';
import ReactDOM from 'react-dom'
import Button from './Button'

const Index = () => {
	console.log(Button);
	return (
		<div>
			<Button>this is host</Button>
		</div>
	);
};

ReactDOM.render(<Index/>, document.querySelector('#root'))
