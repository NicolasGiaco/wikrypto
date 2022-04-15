// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default async function markets(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = process.env.API_URL;
  const currency = req.query.currency || 'usd';
  const response = await fetch(`${url}/coins/markets?vs_currency=${currency}`);
  const data = await response.json();

  res.status(response.status).json(data);
}
