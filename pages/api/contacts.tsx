import clientPromise from '../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export const getContacts = async (): Promise<any> => {
    try {
        const client = await clientPromise;
        const data = await client.db("river-therapy").collection("contacts").find({}).toArray();
        console.log('data', data);
        return JSON.parse(JSON.stringify(data));
    } catch (e) {
        console.error(e);
    }
}

export const addContact = async (contact: any): Promise<any> => {
    try {
        const client = await clientPromise;
        const response = await client.db("river-therapy").collection("contacts").insertOne(contact);
        console.log('response', response);
        return response.insertedId;
    } catch (e) {
        console.error(e);
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        console.log('req.method', req.method);
        const data = await getContacts();
        console.log('data', data);
        return res.status(200).json(data);
    } else if (req.method === 'POST') {
        // Process a POST request
        console.log('req.body', req.body);
        if (req.body.name && req.body.email && req.body.message) {
            const contact = {
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            }
        const insertedId = await addContact(contact);
        return res.status(200).json(insertedId);
        } else {
            res.status(400).json({error: 'All fields required.', errorCode: 400});
        }
    }
}