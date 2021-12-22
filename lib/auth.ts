import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// protect API route
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // check if token is valid
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;
    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, process.env.TRAX_JWT_SECRET) as {
          id: number;
        };
        user = prisma.user.findUnique({ where: { id } });
        if (!user) {
          throw new Error("not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not authorized" });
        return;
      }

      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "Not authorized" });
  };
};
