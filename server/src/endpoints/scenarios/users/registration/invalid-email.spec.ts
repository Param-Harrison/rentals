import { registerUser } from "@/endpoints/registerUser";
import { useTestingDatabase } from "@/testing/db";
import { GOOD_PASSWORD_1 } from "@/testing/passwords";
import "jest";

useTestingDatabase();

test("invalid emails cannot be registered", async () => {
  expect(
    await registerUser(
      {},
      {
        email: "",
        password: GOOD_PASSWORD_1,
        name: "Realtor",
        role: "realtor",
      },
    ),
  ).toMatchObject({
    kind: "failure",
    data: "Please fill in an email address.",
  });
  expect(
    await registerUser(
      {},
      {
        email: " ",
        password: GOOD_PASSWORD_1,
        name: "Realtor",
        role: "realtor",
      },
    ),
  ).toMatchObject({
    kind: "failure",
    data: "Please fill in an email address.",
  });
  expect(
    await registerUser(
      {},
      {
        email: "hello-gmail.com",
        password: GOOD_PASSWORD_1,
        name: "Realtor",
        role: "realtor",
      },
    ),
  ).toMatchObject({
    kind: "failure",
    data: "Invalid email address format.",
  });
});
