import ClaimSchema from "../schemas/claim";
import { ClaimResponse } from "../interfaces/claim.interfaces";

export const getClaims = async (): Promise<ClaimResponse[]> => {
  const claims = await ClaimSchema.find();
  return claims.map((x) => {
    return {
      id: x._id,
      name: x.name,
    };
  });
};
