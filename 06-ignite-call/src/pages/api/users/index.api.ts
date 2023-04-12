// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end();
  }

  const { name, username } = req.body;

  const user = await prisma.user.create({
    data: { name, username },
  });

  return res.status(201).json(user);
}
