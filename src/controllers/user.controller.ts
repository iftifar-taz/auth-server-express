import { RequestHandler } from "express";
import { CreateUserBody } from "../interfaces/user.interfaces";
import * as userService from "../services/user.service";

export const createUser: RequestHandler<
  unknown,
  unknown,
  CreateUserBody,
  unknown
> = async (req, res, next) => {
  try {
    await userService.createUser(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

// export const register = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User(email, hashedPassword);
//     // Save user to the database (simulate with in-memory storage for now)
//     User.save(user);

//     res.status(201).json({ message: "User registered successfully." });
//   } catch (error) {
//     res.status(500).json({ error: "Error registering user." });
//   }
// };

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const user = User.findByEmail(email);

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ error: "Invalid email or password." });
//     }

//     const token = generateToken(user.email);
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: "Error logging in." });
//   }
// };

// export const profile = (req: Request, res: Response) => {
//   res.json({ message: "This is a protected route.", user: req.user });
// };
