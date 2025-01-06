import { Claim } from "../schemas/claim";
import { Role } from "../schemas/role";
import { User } from "../schemas/user";

export const CLAIMS: Partial<Claim>[] = [
  {
    name: "Create User",
    key: "create:user",
    createdAt: new Date(),
  },
  {
    name: "Update User",
    key: "update:user",
    createdAt: new Date(),
  },
  {
    name: "Delete User",
    key: "delete:user",
    createdAt: new Date(),
  },
  {
    name: "View User",
    key: "view:user",
    createdAt: new Date(),
  },
  {
    name: "Create Role",
    key: "create:role",
    createdAt: new Date(),
  },
  {
    name: "Update Role",
    key: "update:role",
    createdAt: new Date(),
  },
  {
    name: "Delete Role",
    key: "delete:role",
    createdAt: new Date(),
  },
  {
    name: "View Role",
    key: "view:role",
    createdAt: new Date(),
  },
  {
    name: "Create Claim",
    key: "create:claim",
    createdAt: new Date(),
  },
  {
    name: "Update Claim",
    key: "update:claim",
    createdAt: new Date(),
  },
  {
    name: "Delete Claim",
    key: "delete:claim",
    createdAt: new Date(),
  },
  {
    name: "View Claim",
    key: "view:claim",
    createdAt: new Date(),
  },
];

export const ROLES: Partial<Role>[] = [
  {
    name: "Super Admin",
    key: "superAdmin",
    createdAt: new Date(),
  },
  {
    name: "User",
    key: "user",
    createdAt: new Date(),
  },
];

export const USERS: Partial<User>[] = [
  {
    firstName: "Super",
    lastName: "Admin",
    phone: "1",
    email: "superAdmin@example.com",
    passwordHash: "111",
    createdAt: new Date(),
  },
  {
    firstName: "FN1",
    lastName: "LN1",
    phone: "3",
    email: "user1@example.com",
    passwordHash: "111",
    createdAt: new Date(),
  },
];
