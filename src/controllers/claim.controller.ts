import { RequestHandler } from "express";
import { ClaimResponse } from "../interfaces/claim.interfaces";
import * as claimService from "../services/claim.service";

export const getClaims: RequestHandler<
  unknown,
  ClaimResponse[],
  unknown,
  unknown
> = async (req, res, next) => {
  try {
    const roles = await claimService.getClaims();
    res.status(200).json(roles);
  } catch (error) {
    next(error);
  }
};
