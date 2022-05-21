import type { NextApiRequest, NextApiResponse } from "next";

import { IPost } from "../../../interfaces/IPost";
import dbConnect from "../../../lib/db-connect";
import Post from "../../../schemas/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { page } = req.query || 1;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const limit = 5;

        const posts: ReadonlyArray<IPost> = await Post.find({})
          .limit(limit * 1)
          .skip((Number(page) - 1) * limit)
          .sort({
            _id: -1,
          });

        const normalizedPosts = posts.map(({ date, post }) => ({ date, post }));

        res.status(200).json({ success: true, data: normalizedPosts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
