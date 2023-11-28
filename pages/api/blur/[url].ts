import { getPlaiceholder } from 'plaiceholder'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query

  try {
    const buffer = await fetch(url).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    )

    const { base64 } = await getPlaiceholder(buffer)
    res.status(200).json({ blurDataURL: base64 })
  } catch (err) {
    res.status(400).end(`Error: ${err}`)
  }
}
