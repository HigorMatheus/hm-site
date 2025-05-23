// 'use client';

import { api, apiNext } from '@/config/api';
import { use } from 'react';

export default async function UserPage() {
	// use(async () => {
	api.get('/users').then((res) => {
		console.log('res axios', res.data);
	});
	// const data = await res.data;
	// console.log(data);
	// });

	// apiNext('/users', {
	// 	method: 'GET',
	// })
	// 	.then((res) => {
	// 		console.log('res', res);
	// 	})
	// 	.catch((err) => {
	// 		console.log('err', err);
	// 	});
	return (
		<div>
			<h1>Users</h1>
		</div>
	);
}
