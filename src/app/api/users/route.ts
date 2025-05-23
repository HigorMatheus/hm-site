import { prisma } from '@/config/prisma';

export async function GET(request: Request) {
	console.log('request');
	// const { searchParams } = new URL(request.url);
	// const id = searchParams.get('id');
	// const user = await prisma.user.findUnique({
	//   where: {
	//     id: Number(id),
	//   },
	// });
	// return new Response(JSON.stringify(user));

	const users = await prisma.user.findMany();
	return new Response(JSON.stringify({ users })); // Example response
}
