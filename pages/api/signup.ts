/* eslint-disable object-shorthand */
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  let user;
  try {
    user = await prisma.user.create({
      data: {
        password: bcrypt.hashSync(password, salt),
        email,
        firstName: "Albert",
        lastName: "King",
      },
    });
  } catch (e) {
    console.log({ e });
    res.status(401);
    res.json({ error: "User already exists" });
    return;
  }

  // jwt requires 3 arguments: payload to sign, the secret to show it's your server sigining and the options
  const token = jwt.sign(
    { email: user.email, id: user.id, time: Date.now() },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  // set jwt in cookie - the cookie set here in the response will be added in the browser that request (more secured way)
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(process.env.TRAX_ACCESS_TOKEN, token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: "/",
      sameSite: "LAX",
      secure: process.env.NODE_ENV === "production",
    })
  );

  res.json(user);
};
