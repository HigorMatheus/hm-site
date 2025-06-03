'use client';

import { apiNext } from '@/config/api';
import { api } from '@/services/api';
import { use } from 'react';

export default function UserPage() {
	// use(async () => {
	api.get('/users').then((res) => {
		console.log('res axios', res.data);
	});
	// const data = await res.data;
	// console.log(data);
	// });

	apiNext('/users', {
		method: 'GET',
	})
		.then(async (res) => {
			const data = await res.json();
			console.log('res', data);
		})
		.catch((err) => {
			console.log('err', err);
		});
	return (
		<div>
			<h1>Users</h1>
		</div>
	);
}
