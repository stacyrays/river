import clientPromise from '../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("river-therapy");
        const blog = await db
            .collection("blog")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        res.json(blog);
    } catch (e) {
        console.error(e);
    }
}