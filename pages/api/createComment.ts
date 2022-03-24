import type { NextApiRequest, NextApiResponse } from 'next'
const sanityClient = require('@sanity/client')

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}
const client = sanityClient(config)

// Handling POST request from front-end - adding user comment to Sanity.io database
export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    return res.status(500).json({ message: "Couldn't submit comment", err })
  }
  console.log('Comment submitted')
  res.status(200).json({ message: 'Comment submitted' })
}
