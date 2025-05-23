import { env } from '@/env';
// import axios from 'axios';

const API_BASE_URL = env.NEXT_PUBLIC_API_BASE_URL;
// export const api = axios.create({
// 	baseURL: API_BASE_URL + '/api',
// });

export async function apiNext(path: string, init?: RequestInit) {
	const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
	const apiPrefix = '/api';
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const url = new URL(apiPrefix.concat(path), baseUrl);
	return fetch(url, init);
}
