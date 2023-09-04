import type { NextApiRequest, NextApiResponse } from 'next'
import { customersReviews } from '@/public/data-samples'
import type { customerReviewType } from '@/types/Customer'

const handler = (req: NextApiRequest, res: NextApiResponse<customerReviewType[]>): void => {
    res.status(200).json(customersReviews.data)
}

export default handler