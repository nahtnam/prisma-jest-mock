// eslint-disable-next-line import/no-extraneous-dependencies
import { mocked } from 'ts-jest/utils';
import { prisma } from '../../prisma';

const mockedPrisma = mocked(prisma, true);

declare global {
  const $prisma: typeof mockedPrisma;
  namespace NodeJS {
    interface Global {
      $prisma: typeof mockedPrisma;
    }
  }
}

global.$prisma = mockedPrisma;
