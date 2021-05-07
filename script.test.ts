import { main } from './script';

it('returns image from database', async () => {
  $prisma.user.count.mockResolvedValue(100);
  const result = await main();
  expect(result).toStrictEqual(100);
});
