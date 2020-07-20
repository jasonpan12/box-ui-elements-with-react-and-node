import React, {useContext, useEffect} from "react";
import BoxContext from '../context/BoxContext';

const axios = require('axios');

export default () => {
	const {token, setToken} = useContext(BoxContext);

	// Specifying no dependencies means this request is made once only when the component mounts
	useEffect(() => {
		axios.get('/token')
			.then((response) => {
				setToken(response.data.token);
			})
	},[])

	return (
		<div>
			<h1>Box + React + Node</h1>
		</div>
	)
};
