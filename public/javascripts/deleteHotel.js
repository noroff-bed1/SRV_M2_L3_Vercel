async function deleteHotel(hotelid) {
	await fetch('/hotels/' + hotelid, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((response) => {
			if (response.ok) {
				const resData = 'hotel deleted...';
				location.reload();
				return Promise.resolve(resData);
			}
			return Promise.reject(response);
		})
		.catch((response) => {
			alert(response.statusText);
		});
}

