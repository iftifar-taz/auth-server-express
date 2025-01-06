import ClaimSchema from "../schemas/claim";
import RoleSchema from "../schemas/role";
import UserSchema from "../schemas/user";
import UserRoleSchema, { UserRole } from "../schemas/userRole";
import RoleClaimSchema, { RoleClaim } from "../schemas/roleClaim";
import { CLAIMS, ROLES, USERS } from "./initial-seed-data";

async function seedDB() {
  try {
    const userCount = await UserSchema.countDocuments();
    if (userCount === 0) {
      console.log("Initial data seeded started.");

      const newClaims = await ClaimSchema.insertMany(CLAIMS);
      const newRoles = await RoleSchema.insertMany(ROLES);
      const newUsers = await UserSchema.insertMany(USERS);
      const userRoles: UserRole[] = [
        {
          user: newUsers[0]._id,
          role: newRoles[0]._id,
        },
        {
          user: newUsers[1]._id,
          role: newRoles[1]._id,
        },
      ];
      await UserRoleSchema.insertMany(userRoles);

      const roleClaims1: RoleClaim[] = newClaims.map((x) => {
        return {
          role: newRoles[0]._id,
          claim: x._id,
        };
      });
      await RoleClaimSchema.insertMany(roleClaims1);
      const roleClaims2: RoleClaim[] = newClaims
        .filter((x) => x.key?.startsWith("view:"))
        .map((x) => {
          return {
            role: newRoles[0]._id,
            claim: x._id,
          };
        });
      await RoleClaimSchema.insertMany(roleClaims2);

      console.log("Initial data seeded successfully.");
    } else {
      console.log("Database already contains user. Skipping seeding.");
    }
  } catch (err) {
    console.error("Error seeding data:", err);
  }
}

export default seedDB;
