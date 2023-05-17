import type {NextApiRequest, NextApiResponse} from 'next'
import masa from "../../data/masa-para-hornear";

type Data = {
    masa: any

}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json({masa: masa})
    } else {
        res.status(405).json({masa: []})
    }
}
