import ClaimSchema, { Claim } from "./schemas/claim";
import RoleSchema, { Role } from "./schemas/role";
import UserSchema, { User } from "./schemas/user";

const claims: Partial<Claim>[] = [
  {
    name: "Create User",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "Update User",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "Delete User",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "View Role",
    type: "read",
    createdAt: new Date(),
  },
  {
    name: "Create Role",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "Update Role",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "Delete Role",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "View Role",
    type: "read",
    createdAt: new Date(),
  },
  {
    name: "Create Claim",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "Update Claim",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "Delete Claim",
    type: "write",
    createdAt: new Date(),
  },
  {
    name: "View Claim",
    type: "read",
    createdAt: new Date(),
  },
];

const role: Partial<Role> = {
  name: "Super Admin",
  createdAt: new Date(),
};

const user: Partial<User> = {
  firstName: "Iftifar",
  lastName: "Taz",
  email: "iftifar@example.com",
  passwordHash: "111",
  createdAt: new Date(),
};

async function seedDB() {
  try {
    const userCount = await UserSchema.countDocuments();
    if (userCount === 0) {
      console.log("Initial data seeded started.");

      const newClaims = await ClaimSchema.insertMany(claims);

      role.claims = newClaims.map((x) => x._id);
      const newRole = await RoleSchema.create(role);

      user.roles = [newRole._id];
      const newUser = await UserSchema.create(user);

      role.users = [newUser._id];
      await RoleSchema.updateOne(role);

      console.log("Initial data seeded successfully.");
    } else {
      console.log("Database already contains user. Skipping seeding.");
    }
  } catch (err) {
    console.error("Error seeding data:", err);
  }
}

export default seedDB;
