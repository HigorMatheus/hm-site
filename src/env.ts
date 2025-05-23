import { z } from 'zod';

const envSchema = z.object({
	NEXT_PUBLIC_API_BASE_URL: z.string().url(),
	APP_URL: z.string().url(),
});

console.log('process.env', process.env);
// const parsedEnv = envSchema.safeParse(process.env);
// .then((result) => {
// 	if (!result.success) {

//     console.error(
//       'Invalid environment variables',
//       result.error.flatten().fieldErrors,
//     );
//     throw new Error('Invalid environment variables');
// 	}else {
//     console.log('Valid environment variables');

//     return result.data;
//   }
// });

// if (!parsedEnv.success) {
// 	console.error(
// 		'Invalid environment variables',
// 		parsedEnv?.error?.flatten()?.fieldErrors,
// 	);

// 	throw new Error('Invalid environment variables');
// }

export const env: z.infer<typeof envSchema> = {
	APP_URL: process.env.APP_URL || 'http://localhost:3000',
	NEXT_PUBLIC_API_BASE_URL:
		process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
};
