import { mockDeep } from 'jest-mock-extended';
import { PrismaClient as OriginalPrismaClient } from '@prisma/client';

const mockPrisma = mockDeep<OriginalPrismaClient>();

export const PrismaClient = () => mockPrisma;
