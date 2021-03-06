import { registerUser } from "@/endpoints/registerUser";
import { useTestingDatabase } from "@/testing/db";
import "jest";
import uuid from "uuid";

useTestingDatabase();

test("weak passwords are rejected", async () => {
  await expectRejected(
    "short",
    "Password too weak: The password must be at least 8 characters long.",
  );
  await expectRejected(
    "password",
    "Password too weak: The password must contain at least one uppercase letter.",
  );
  await expectRejected(
    "passw0rd",
    "Password too weak: The password must contain at least one uppercase letter.",
  );
  await expectAccepted("pAssw0rd");
  await expectAccepted("Passw0rd!");
});

async function expectRejected(password: string, expectedMessage: string) {
  const response = await registerUser(
    {},
    {
      email: uuid.v4() + "@gmail.com",
      password,
      name: "Client",
      role: "client",
    },
  );
  expect(response).toMatchObject({
    kind: "failure",
    data: expectedMessage,
  });
}

async function expectAccepted(password: string) {
  const response = await registerUser(
    {},
    {
      email: uuid.v4() + "@gmail.com",
      password,
      name: "Client",
      role: "client",
    },
  );
  expect(response).toMatchObject({
    kind: "success",
  });
}
