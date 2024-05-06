async function makeRate(userId, url) {
	let value = prompt('Rate the hotel from 1 to 5');
	await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			UserId: userId,
			Value: value,
		}),
	})
		.then((response) => {
			if (response.ok) {
				const resData = 'Made a rate';
				alert(resData);
				location.reload();
				return Promise.resolve(resData);
			}
			return Promise.reject(response);
		})
		.catch((response) => {
			console.log(response);
			alert(response.statusText);
		});
}
