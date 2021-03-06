import { AuthRequired } from "@/api/types";
import { connection } from "@/db/connections";
import { User } from "@/db/entities/user";
import { loginUser } from "@/endpoints/loginUser";

export const CLIENT_ANNA = "anna@gmail.com";
export const ANNA_PASSWORD = "anna!123";

export const CLIENT_BRIAN = "brian@gmail.com";
export const BRIAN_PASSWORD = "brian!123";

export const REALTOR_JOHN = "john@realestate.com";
export const JOHN_PASSWORD = "john!123";

export const REALTOR_HELENA = "helena@realestate.com";
export const HELENA_PASSWORD = "helena!123";

export const ADMIN_FRANK = "frank@rentals.com";
export const FRANK_PASSWORD = "frank!123";

export const ADMIN_GEORGE = "george@rentals.com";
export const GEORGE_PASSWORD = "george!123";

export async function createTestUsers() {
  await connection.manager.save([
    User.create(
      {
        email: CLIENT_ANNA,
        password: ANNA_PASSWORD,
        name: "Anna",
        role: "client",
      },
      { verified: true },
    ),
    User.create(
      {
        email: CLIENT_BRIAN,
        password: BRIAN_PASSWORD,
        name: "Brian",
        role: "client",
      },
      { verified: true },
    ),
    User.create(
      {
        email: REALTOR_JOHN,
        password: JOHN_PASSWORD,
        name: "John",
        role: "realtor",
      },
      { verified: true },
    ),
    User.create(
      {
        email: REALTOR_HELENA,
        password: HELENA_PASSWORD,
        name: "Helena",
        role: "realtor",
      },
      { verified: true },
    ),
    User.create(
      {
        email: ADMIN_FRANK,
        password: FRANK_PASSWORD,
        name: "Frank",
        role: "admin",
      },
      { verified: true },
    ),
    User.create(
      {
        email: ADMIN_GEORGE,
        password: GEORGE_PASSWORD,
        name: "George",
        role: "admin",
      },
      { verified: true },
    ),
  ]);
}

export async function findUser(email: string): Promise<User> {
  const user = await connection.manager.findOne(User, { email });
  if (!user) {
    throw new Error(`No user found.`);
  }
  return user;
}

export async function authHeaders(
  email: string,
  password: string,
): Promise<AuthRequired> {
  const loginResponse = await loginUser({
    email,
    password,
  });
  expect(loginResponse).toMatchObject({
    kind: "success",
  });
  if (loginResponse.kind !== "success") {
    throw new Error();
  }
  return {
    Authorization: loginResponse.data.authToken,
  };
}
