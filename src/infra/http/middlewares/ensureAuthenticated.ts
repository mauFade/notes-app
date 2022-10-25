import auth from "../../../configs/auth";
import { InvalidTokenError } from "../../../lib/errors";

import { Users } from "../../../resources/user/infra/database/entities/User";
import { CelebrateError, Joi } from "celebrate";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface ITokenDecodeProps {
  iat: number;
  exp: number;
  user: Users;
}

export default async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { authorization } = req.headers;
    const { error } = Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .validate({ authorization });

    if (error) {
      throw new CelebrateError(error.message, {
        celebrated: true,
      });
    }

    const [bearer, token] = authorization?.split(" ") as string[];

    if (
      bearer.toLowerCase() !== "bearer" ||
      !token ||
      token.split(".").length !== 3
    ) {
      throw new InvalidTokenError(
        "The current token format is incorrect. Please check the documentation."
      );
    }

    const tokenDecoded = jwt.verify(
      token,
      auth.users.secretKey
    ) as ITokenDecodeProps;

    req.user = {
      id: tokenDecoded.user?.id,
    };

    return next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new InvalidTokenError("This token is expired, please login again.");
    }
  }
}
