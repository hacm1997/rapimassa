import type {NextApiRequest, NextApiResponse} from 'next'
import preparacion from "../../data/preparacion";

type Data = {
    preparacion: any

}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json({preparacion: preparacion})
    } else {
        res.status(405).json({preparacion: []})
    }
}
