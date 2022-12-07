import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(200).json({
      message: "Example successful response. Query params below:",
      params: req?.query,
    });
  } catch (err) {
    return res.status(500).json({ message: "Error caught.", error: err });
  }
};
