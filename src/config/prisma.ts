import { PrismaClient } from '@prisma/client';

export interface PageProps<T extends object = {}> {
	params: { lang: 'pt' };
	searchParams: T;
}

// import { PrismaClient, Prisma } from "../app/generated/prisma";

export const prisma = new PrismaClient();
