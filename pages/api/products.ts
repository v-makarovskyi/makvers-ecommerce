import type { NextApiRequest, NextApiResponse } from "next";
import type { ProductType } from "@/types/Product";
import { productsData } from "@/public/data-samples";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Partial<ProductType>>
): void => {
  res.status(200).json(productsData);
};

export default handler;
