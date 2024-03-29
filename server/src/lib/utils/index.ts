import { Request } from "express";
import { Database, User } from "../types";

export const authorize = async (db: Database, req: Request): Promise<User | null> => {
  // const token = req.get("X-CSRF-TOKEN");
  const register = await db.users.findOne({
    _id: req.signedCookies.register,
    // token,
  });
  return register;
};
