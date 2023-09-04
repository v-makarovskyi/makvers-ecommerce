export type CustomerType = {
    id: number | string,
    name: string,
    image?: string
}

export type customerReviewType = CustomerType & {
    review: {
        id: string,
        description: string,
        rating: number,
    }
}