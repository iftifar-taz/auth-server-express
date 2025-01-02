import RoleSchema from "../schemas/role";
import { RoleResponse } from "../interfaces/role.interfaces";

export const getRoles = async (): Promise<RoleResponse[]> => {
  const roles = await RoleSchema.find().populate("claims");

  console.log(roles[0].claims);
  return roles.map((x) => {
    return {
      id: x._id,
      name: x.name,
    };
  });
};
