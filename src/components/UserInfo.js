import React, {useContext, useEffect, useState} from "react";
import BoxContext from "../context/BoxContext";

const axios = require('axios');

export default () => {
	let [userInfo, setUserInfo] = useState();
	const {state} = useContext(BoxContext);

	useEffect(() => {
		axios.get('https://api.box.com/2.0/users/me', {
				headers: {
					'Authorization': `Bearer ${state.token}`
				}
			})
			.then((res) => {
				let { name, login, created_at} = res.data;

				setUserInfo({
					name,
					login,
					created_at
				});
		})
	}
	, [state.token])

	return (
		userInfo ?
		<div>
			<p>Current User: {userInfo.login}</p>
		</div> :
		<div>

		</div>
	);
}
