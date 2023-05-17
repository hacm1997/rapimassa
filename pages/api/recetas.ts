import type {NextApiRequest, NextApiResponse} from 'next'
import recetas from "../../data/recetas";

type Data = {
    recetas: any

}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json({recetas: recetas})
    } else {
        res.status(405).json({recetas: []})
    }
}
